import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import { color, device } from '../../theme';
import { useModalContext } from '../../context';
import { Close, Star } from '@material-ui/icons';
import { Rating } from '@mui/material';
import { searchId } from '../../api';

const ModalStyled = styled(motion.div)`
    position: absolute;
    padding-top: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
    top: 10vh;
    left: 10vw;
    height: 80vh;
    width: 80vw;
    background: ${color.neutral};
    z-index: 5;
    border-radius: 20px;
    box-shadow: 0 0 30px;
    overflow: hidden;
`;
const ModalBg = styled.div`
    position: absolute;
    height: 100vh;
    width: 100vw;
    z-index: 4;
    background: rgba(0, 0, 0, 0.8);
`;
const SimpleButton = styled.button`
    background: none;
    border: none;
    :hover {
        color: ${color.dark};
        cursor: pointer;
    }
`;
const ContainerStarsdiv = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
`;
const LogoStyled = styled.img`
    width: 100px;
    @media ${device.tablet} {
        width: 160px;
    }
    @media ${device.desktop} {
        width: 300px;
    }
`;
const TopContainer = styled.div`
    width: 90%;
    height: 100px;
    display: flex;
    justify-content: flex-end;
`;
const MainContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 80%;
`;
const CloseStyled = styled(Close)`
    color: ${color.light};
    background: ${color.watermelon};
    border-radius: 50%;
    font-size: 2em;
    padding: 5px;
`;
const FaceContainer = styled.div`
    height: 300px;
    font-size: 6em;
    margin-top: 1em;
`;
export const Modal: React.FC = () => {
    const [show, toggleShow] = useState(false);
    const { modalState, closeModal, idClicked } = useModalContext();
    const [supplier, setSupplier] = useState<any>({});
    const [rating, setRating] = useState(2);
    const [hover, setHover] = useState(-1);

    const abrirModal = () => {
        modalState ? toggleShow(true) : toggleShow(false);
    };
    const loadModal = async () => {
        const res = await searchId(idClicked);
        setSupplier(res);
    };

    useEffect(() => {
        loadModal().then(() => {
            setRating(supplier.rating);
            abrirModal();
        });
    }, [modalState]);
    useEffect(() => {
        setSupplier({ ...supplier, rating: rating });
    }, [rating]);
    const labels: any = {
        0: '😭',
        1: '😪',
        2: '🤨',
        3: '🙂',
        4: '😄',
        5: '🥰',
    };
    return show ? (
        <>
            <ModalBg onClick={() => closeModal()} />
            <ModalStyled>
                <TopContainer>
                    <SimpleButton onClick={() => closeModal()}>
                        <CloseStyled />
                    </SimpleButton>
                </TopContainer>
                <MainContainer>
                    <LogoStyled
                        src={supplier?.logo}
                        alt="logo proveedor"
                    ></LogoStyled>
                    <h1>{supplier?.nombre}</h1>
                    <h3>Id : {supplier?.id}</h3>
                    <h2>Date Created : {supplier?.dateCreated}</h2>
                    <h4>CIF : {supplier?.cif}</h4>
                    <ContainerStarsdiv>
                        <Rating
                            size={'large'}
                            name="hover-feedback"
                            value={rating}
                            precision={1}
                            onChange={(event, newValue: any) => {
                                setRating(newValue);
                            }}
                            onChangeActive={(event, newHover) => {
                                setHover(newHover);
                            }}
                            emptyIcon={<Star style={{ fontSize: '1em' }} />}
                        />
                    </ContainerStarsdiv>
                    {rating !== null && (
                        <FaceContainer>
                            {labels[hover !== -1 ? hover : rating]}
                        </FaceContainer>
                    )}
                </MainContainer>
            </ModalStyled>
        </>
    ) : null;
};
