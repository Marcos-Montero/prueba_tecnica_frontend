import React from 'react';
import styled from 'styled-components';
import { Star } from '@material-ui/icons';
import { device, color } from '../../theme';
import { motion } from 'framer-motion';
import { useModalContext } from '../../context';

interface ICardStyled {
    img: string;
}
interface ICard {
    id: number;
    fondo: string;
    name: string;
    rating: number;
    cif: number;
}
const CardStyled = styled(motion.div)<ICardStyled>`
    position: relative;
    height: 100px;
    width: 180px;
    background: url(${(props) => props.img}), ${color.light};
    background-size: contain;
    background-repeat: no-repeat;
    box-shadow: 0px 10px 5px lightgray;
    border-radius: 12px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    overflow: hidden;
    text-decoration: none;
    > p {
        color: ${color.dark};
    }
    ::after {
        content: '';
        position: absolute;
        background: rgba(0, 0, 0, 0.4);
        border-radius: 50%;
        height: 200px;
        width: 400px;
        bottom: -150px;
        right: -180px;
    }
    @media ${device.tablet} {
    }
`;
const MainStyled = styled.div`
    display: flex;
    justify-content: end;
    align-items: flex-end;
    color: white;
    height: 300px;
    z-index: 2;
    padding: 5px;
`;
const FooterStyled = styled.div`
    background: ${color.peach};
    color: ${color.dark};
    height: 20px;
    font-size: 0.7em;
    text-align: center;
    z-index: 2;
    padding: 3px;
    font-weight: lighter;
`;
const RatingContainer = styled.div`
    display: flex;
    align-self: end;
    border-radius: 8px;
    align-items: center;
    justify-content: center;
    margin: 10px;
    font-weight: bold;
`;
const StarStyled = styled(Star)`
    position: absolute;
    transform: scale(1.5);
    color: rgba(220, 100, 20, 0.2);
`;
const RatingStyled = styled.p`
    margin: 0;
    padding: 0;
    z-index: 2;
    font-weight: bolder;
    font-size: 0.8em;
    opacity: 0.6;
`;

export const Card: React.FC<ICard> = ({ id, fondo, name, rating, cif }) => {
    const { openModal, pickId } = useModalContext();
    const handleClick = () => {
        pickId(id);
        openModal();
    };
    return (
        <CardStyled
            img={fondo}
            whileHover={{ scale: 1.1, cursor: 'pointer' }}
            onDoubleClick={handleClick}
        >
            <RatingContainer>
                <RatingStyled>{rating}</RatingStyled>
                <StarStyled />
            </RatingContainer>
            <MainStyled>{name}</MainStyled>
            <FooterStyled>CIF: {cif}</FooterStyled>
        </CardStyled>
    );
};
