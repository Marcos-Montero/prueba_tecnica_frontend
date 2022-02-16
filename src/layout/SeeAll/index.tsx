import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { SliderVertical, CardSmall } from '../../components';
import { initApi } from '../../api';
import { color } from '../../theme';

const ContainerSeeAll = styled.div`
    flex-grow: 20;
    position: relative;
    height: 100%;
    overflow: hidden;
    padding: 1%;
`;
const TitleRecently = styled.h2`
    color: ${color.watermelon};
`;
const ContainerSlider = styled.div`
    overflow: hidden;
`;
export const SeeAll = () => {
    type IList = {
        id: number;
        nombre: string;
        logo: string;
        rating: number;
    };
    const [allList, setAllList] = useState<IList[]>();
    const loadAll = async () => {
        const list: IList[] = await initApi();
        const aux = [...list];
        const orderedAux = aux.sort((a, b) => a.id - b.id);
        setAllList(orderedAux);
    };
    useEffect(() => {
        loadAll();
    }, []);

    return (
        <ContainerSeeAll>
            <TitleRecently>See All</TitleRecently>
            <ContainerSlider>
                <SliderVertical>
                    {allList?.map((v, i) => (
                        <CardSmall
                            id={v?.id}
                            key={i}
                            name={v?.nombre}
                            rating={v?.rating}
                        />
                    ))}
                </SliderVertical>
            </ContainerSlider>
        </ContainerSeeAll>
    );
};
