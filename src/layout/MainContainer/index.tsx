import React from 'react';
import styled from 'styled-components';
import { device, color } from '../../theme';

const FrameContainer = styled.div`
    background: white;
    @media ${device.desktop} {
        display: flex;
        justify-content: center;
    }
`;
const MainContainerStyled = styled.div`
    background: ${color.neutral};
    overflow: hidden;

    @media ${device.tablet} {
        margin: 0 2%;
        padding: 0 2%;
    }
    @media ${device.desktop} {
        max-width: 1000px;
        border: 2px solid lightgray;
        border-radius: 12px;
    }
`;

export const MainContainer: React.FC = ({ children }) => {
    return (
        <FrameContainer>
            <MainContainerStyled>{children}</MainContainerStyled>
        </FrameContainer>
    );
};
