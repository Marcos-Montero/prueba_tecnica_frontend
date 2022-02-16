import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { SliderVertical, CardMedium } from '../../components';
import { initApi } from '../../api';
import { device, color } from '../../theme';

const ContainerRecently = styled.div`
    display: none;
    flex-grow: 1;
    padding-left: 20px;
    position: relative;
    height: 100%;
    overflow: hidden;
    padding: 1%;
    @media ${device.tablet} {
        display: block;
    }
`;
const TitleRecently = styled.h2`
    color: ${color.watermelon};
`;
const ContainerSlider = styled.div`
    overflow: hidden;
    box-shadow: 0 2px 10px lightgray inset, 0 0 10px lightgray;
    border-radius: 30px;
`;
export const RecentlyAdded = () => {
    type IList = {
        id: number;
        nombre: string;
        dateCreated: string;
        logo: string;
        rating: number;
    };
    const [recentlyAddedList, setRecentlyAddedList] = useState<IList[]>();

    const loadRecentlyAdded = async () => {
        const list: IList[] = await initApi();
        const aux = [...list];
        const orderedAux = aux.sort((a, b) => b.id - a.id);
        setRecentlyAddedList(orderedAux);
    };
    useEffect(() => {
        loadRecentlyAdded();
    }, []);

    return (
        <ContainerRecently>
            <TitleRecently>Recently Added</TitleRecently>
            <ContainerSlider>
                <SliderVertical>
                    {recentlyAddedList?.slice(0, 7).map((v, i) => (
                        <CardMedium
                            id={v?.id}
                            key={i}
                            fondo={v?.logo}
                            name={v?.nombre}
                            rating={v?.rating}
                            dateCreated={v?.dateCreated}
                        />
                    ))}
                </SliderVertical>
            </ContainerSlider>
        </ContainerRecently>
    );
};
