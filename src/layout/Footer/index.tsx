import { motion } from 'framer-motion';
import React from 'react';
import styled from 'styled-components';
import { color } from '../../theme';
import { GitHub } from '@material-ui/icons';

const FooterStyled = styled(motion.div)`
    text-decoration: none;
    position: fixed;
    left: -170vw;
    bottom: -750px;
    height: 800px;
    width: 400vw;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    background: ${color.peach};
    z-index: 4;
`;
const ContainerFirm = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 10px;
    left: 50%;
`;
const Firm = styled.p`
    font-style: italic;
    margin: 4px;
    padding: 0;
`;
const Slogan = styled.p`
    font-family: 'Kaushan Script', cursive;
`;
const ContainerSlogan = styled(motion.a)`
    position: relative;
    color: gold;
    text-decoration: none;
    display: flex;
    justify-content: center;
    width: 100%;
    gap: 2em;
    align-items: center;
    :visited {
        color: gold;
    }
    ::before {
        content: '';
        position: absolute;
        background: #ff66005e;
        width: 60%;
        height: 15px;
        left: 0;
        transform: skewX(20deg);
        z-index: -1;
        transition: 1s;
        left: 60px;
        transform: skewX(60deg);
    }
`;
const GitHubStyled = styled(GitHub)`
    margin: 0;
    padding: 0;
`;

export const Footer = () => {
    return (
        <FooterStyled whileHover={{ translateY: -43, opacity: 0.8 }}>
            <ContainerFirm>
                <Firm>Designed and developed by Marcos Montero</Firm>
                <ContainerSlogan
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.8 }}
                    href="https://github.com/MarcosMRod"
                    target="_blank"
                >
                    <Slogan>Contact me!</Slogan>
                    <GitHubStyled />
                </ContainerSlogan>
            </ContainerFirm>
        </FooterStyled>
    );
};
