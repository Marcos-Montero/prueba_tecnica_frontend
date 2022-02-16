import React, { useContext, useEffect, useState } from 'react';
import { searchId } from '../../api';

type ModalContextType = {
    modalState: boolean;
    openModal: () => void;
    closeModal: () => void;
    pickId: (arg0: number) => void;
    idClicked: number;
};
export const ModalContext = React.createContext<ModalContextType>({
    modalState: false,
    openModal: () => null,
    closeModal: () => null,
    pickId: () => null,
    idClicked: 1,
});

export const ModalContextProvider: React.FC = ({ children }) => {
    const [modalState, setModalState] = useState(false);
    const [idClicked, setIdClicked] = useState(1);

    const openModal = () => {
        setModalState(true);
    };
    const closeModal = () => {
        setModalState(false);
    };
    const pickId = (x: number): void => {
        setIdClicked(x);
    };
    const providerValues = {
        modalState,
        openModal,
        closeModal,
        pickId,
        idClicked,
    };
    return (
        <ModalContext.Provider value={providerValues}>
            {children}
        </ModalContext.Provider>
    );
};
export const useModalContext = () => useContext(ModalContext);
