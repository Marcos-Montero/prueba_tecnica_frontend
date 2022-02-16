import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import { color, device } from '../../theme';
import { useModalContext } from '../../context';
import { Close, Star } from '@material-ui/icons';
import { changeRating } from '../../api';

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
const ButtonSend = styled(motion.button)`
    background: ${color.watermelon};
    color: ${color.light};
    border: none;
    border-radius: 12px;
    margin-top: 2em;
    padding: 10px;
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
export const Modal: React.FC = () => {
    const [show, toggleShow] = useState(false);
    const { modalState, closeModal, supplierClicked } = useModalContext();
    const [supplier, setSupplier] = useState<any>({});
    const [rating, setRating] = useState(0);
    const [showSend, setShowSend] = useState(false);

    const cargarModal = async () => {
        const res = await supplierClicked;
        setSupplier(res);
    };
    const abrirModal = () => {
        modalState ? toggleShow(true) : toggleShow(false);
    };

    useEffect(() => {
        abrirModal();
        cargarModal();
        setRating(supplier.rating);
    }, [modalState]);

    const rateUp = (): any => {
        setShowSend(true);
        rating < 5 && setRating(rating + 1);
    };
    const rateDown = (): any => {
        setShowSend(true);
        rating > 0 && setRating(rating - 1);
    };
    const handleSend = (rate: number) => {
        changeRating({
            id: supplier?.id,
            nombre: supplier?.nombre,
            cif: supplier?.cif,
            logo: supplier?.logo,
            rating: rating,
            dateCreated: supplier?.dateCreated,
        });
        alert(`Rating sent ${rate}`);
        closeModal();
        // window.location.reload();
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
                        <button onClick={rateDown}>-</button>
                        {Array.from({ length: rating }).map((v, i) => (
                            <Star key={i} />
                        ))}
                        <button onClick={rateUp}>+</button>
                    </ContainerStarsdiv>
                    {showSend && (
                        <ButtonSend
                            whileHover={{ scale: 1.2, cursor: 'pointer' }}
                            onClick={() => handleSend(rating)}
                        >
                            Send Rating!
                        </ButtonSend>
                    )}
                </MainContainer>
            </ModalStyled>
        </>
    ) : null;
};
