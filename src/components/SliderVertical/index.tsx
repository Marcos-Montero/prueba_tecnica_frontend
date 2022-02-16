import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const MainContainer = styled(motion.div)`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    gap: 10px;
    align-items: center;
    width: 100%;
`;
const SliderStyled = styled(motion.div)`
    bottom: 0;
`;
export const SliderVertical: React.FC = ({ children }) => {
    const [totalHeight, setTotalHeight] = useState(0);
    const getHeight = (itemNumber: number) => {
        const totalHeight = itemNumber * 40;
        const totalGap = (itemNumber - 1) * 10;
        return totalHeight + totalGap;
    };
    useEffect(() => {
        setTotalHeight(getHeight(React.Children.count(children)));
    }, [children]);
    return (
        <motion.div>
            <SliderStyled
                style={{ height: totalHeight }}
                drag="y"
                dragConstraints={{
                    top: -getHeight(React.Children.count(children)),
                    bottom: 0,
                }}
            >
                <MainContainer>{children}</MainContainer>
            </SliderStyled>
        </motion.div>
    );
};
