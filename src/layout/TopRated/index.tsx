import React, { useState, useEffect } from 'react';
import { initApi } from '../../api';
import { Slider, Card } from '../../components';
import styled from 'styled-components';
import { color } from '../../theme';

const TopFrame = styled.div`
    position: relative;
    display: flex;
    flex-flow: row wrap;
    align-items: center;
    justify-content: flex-start;
    width: 100vw;
    padding: 2em 30px;
    min-width: 700px;
`;
const FrameTitle = styled.h1`
    width: 100%;
    text-align: left;
    color: ${color.watermelon};
`;
const TitleContainer = styled.div`
    width: 100%;
`;
export const TopRated: React.FC = () => {
    type IList = {
        id: number;
        nombre: string;
        cif: number;
        logo: string;
        rating: number;
    };
    const [topFeaturedList, setTopFeaturedList] = useState<IList[]>();

    const loadTopFeaturedList = async () => {
        const list: IList[] = await initApi();
        const aux = [...list];
        const orderedAux = aux.sort((a, b) => b.rating - a.rating);
        setTopFeaturedList(orderedAux);
    };

    useEffect(() => {
        loadTopFeaturedList();
    }, []);

    return (
        <TopFrame>
            <TitleContainer>
                <FrameTitle>Top Rated</FrameTitle>
            </TitleContainer>
            <Slider>
                {topFeaturedList?.slice(0, 7).map((v, i) => (
                    <Card
                        key={i}
                        id={v?.id}
                        fondo={v?.logo}
                        name={v?.nombre}
                        rating={v?.rating}
                        cif={v?.cif}
                    />
                ))}
            </Slider>
        </TopFrame>
    );
};
