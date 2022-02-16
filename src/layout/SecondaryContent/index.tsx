import React from 'react';
import styled from 'styled-components';

const ContainerSecondary = styled.div`
    position: relative;
    display: flex;
    flex-direction: row;
    height: 68vh;
    padding-bottom: 30px;
`;
export const SecondaryContent: React.FC = ({ children }) => {
    return <ContainerSecondary>{children}</ContainerSecondary>;
};
