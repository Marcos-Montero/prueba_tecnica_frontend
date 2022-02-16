import React from 'react';
import styled from 'styled-components';
import { Person, HomeRounded, Settings } from '@material-ui/icons';
import { mainLogo } from '../../img';
import { color } from '../../theme';
const NavStyled = styled.div`
    height: 50px;
    color: ${color.light};
    display: flex;
    justify-content: space-between;
    width: 100vw;
    box-shadow: 0 0 4px black;
`;
const MainLogo = styled.img``;
const IconsContainer = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
`;
const UserStyled = styled(Person)`
    width: 10px;
    color: ${color.carbon};
    :hover {
        color: ${color.dark};
    }
`;
const HomeStyled = styled(HomeRounded)`
    width: 10px;
    color: ${color.carbon};
    :hover {
        color: ${color.dark};
    }
`;
const SettingsStyled = styled(Settings)`
    width: 10px;
    color: ${color.carbon};
    :hover {
        color: ${color.dark};
    }
`;
const SectionTitle = styled.h3`
    color: black;
    margin: 0;
`;
const SectionContainer = styled.div`
    display: flex;
    align-items: center;
    margin: 0;
`;
const SimpleButton = styled.button`
    background: none;
    border: none;
    :hover {
        color: ${color.dark};
        cursor: pointer;
    }
`;
export const Nav = () => {
    return (
        <NavStyled>
            <MainLogo src={mainLogo}></MainLogo>
            <SectionContainer>
                <SimpleButton>
                    <SectionTitle>Suppliers</SectionTitle>
                </SimpleButton>
            </SectionContainer>
            <IconsContainer>
                <SimpleButton>
                    <UserStyled />
                </SimpleButton>
                <SimpleButton>
                    <HomeStyled />
                </SimpleButton>
                <SimpleButton>
                    <SettingsStyled />
                </SimpleButton>
            </IconsContainer>
        </NavStyled>
    );
};
