import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const MainContainer = styled(motion.div)`
    display: flex;
    justify-content: flex-start;
    gap: 10px;
    align-items: center;
    width: 100%;
`;
const getWidth = (itemNumber: number) => {
    const totalWidth = itemNumber * 30;
    const totalGap = (itemNumber - 1) * 10;
    return totalWidth + totalGap;
};
export const Slider: React.FC = ({ children }) => {
    return (
        <motion.div>
            <motion.div
                drag="x"
                dragConstraints={{
                    left: -getWidth(React.Children.count(children)),
                    right: 0,
                }}
            >
                <MainContainer>{children}</MainContainer>
            </motion.div>
        </motion.div>
    );
};
