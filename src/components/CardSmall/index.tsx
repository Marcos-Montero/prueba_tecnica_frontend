import React from 'react';
import styled from 'styled-components';
import { Star } from '@material-ui/icons';
import { device, color } from '../../theme';
import { motion } from 'framer-motion';
import { useModalContext } from '../../context';

interface ICard {
    id: number;
    name: string;
    rating: number;
}
const CardStyled = styled(motion.div)`
    font-size: large;
    color: ${color.dark};
    position: relative;
    height: 50px;
    width: 100%;
    background: ${color.light};
    box-shadow: 1px 1px 3px lightgray;
    border-radius: 6px;
    margin: 3px;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    overflow: hidden;
    :hover {
        background: ${color.peach};
    }
    ::after {
        content: '';
        position: absolute;
        background: rgba(100, 0, 0, 0.1);
        border-radius: 50%;
        height: 200px;
        width: 400px;
        bottom: -150px;
        right: -180px;
    }
    @media ${device.tablet} {
    }
`;
const NameStyled = styled.h4`
    text-align: center;
`;

const StarStyled = styled(Star)`
    transform: scale(1.1);
    color: rgba(220, 100, 20, 0.8);
`;
const RatingStyled = styled.div`
    height: 30px;
`;

export const CardSmall: React.FC<ICard> = ({ id, name, rating }) => {
    const { openModal, pickId } = useModalContext();
    const handleClick = () => {
        pickId(id);
        openModal();
    };
    return (
        <CardStyled
            whileHover={{ cursor: 'pointer' }}
            onDoubleClick={handleClick}
        >
            <NameStyled>{name}</NameStyled>
            <RatingStyled>
                {Array.from({ length: rating }).map((v, i) => (
                    <StarStyled key={i} />
                ))}
            </RatingStyled>
        </CardStyled>
    );
};
