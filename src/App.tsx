import React from 'react';
import { Nav, TopRated, SecondaryContent, RecentlyAdded, MainContainer, SeeAll, Footer } from './layout';
import { Modal } from './components'
import { ModalContextProvider } from './context/ModalContext';

const App: React.FC = () => {
    return (
        <ModalContextProvider>
            <Modal />
            <Nav />
            <MainContainer>
                <TopRated />
                <SecondaryContent>
                    <RecentlyAdded />
                    <SeeAll />
                </SecondaryContent>
            </MainContainer>
            <Footer />
        </ModalContextProvider>
    );
};
export default App;
