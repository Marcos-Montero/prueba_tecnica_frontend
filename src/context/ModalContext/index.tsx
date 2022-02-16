import React, { useContext, useEffect, useState } from 'react';
import { searchId } from '../../api';

type ModalContextType = {
    modalState: boolean;
    openModal: () => void;
    closeModal: () => void;
    pickId: (arg0: number) => void;
    supplierClicked: any;
};
export const ModalContext = React.createContext<ModalContextType>({
    modalState: false,
    openModal: () => null,
    closeModal: () => null,
    pickId: () => null,
    supplierClicked: {},
});

export const ModalContextProvider: React.FC = ({ children }) => {
    const [modalState, setModalState] = useState(false);
    const [idClicked, setIdClicked] = useState(1);
    const [supplierClicked, setSupplierClicked] = useState({});

    const openModal = () => {
        setModalState(true);
    };
    const closeModal = () => {
        setModalState(false);
    };
    const pickId = (x: number): void => {
        setIdClicked(x);
    };

    const loadSupplierInfo = async (id: number): Promise<any> => {
        return await searchId(id);
    };
    useEffect(() => {
        loadSupplierInfo(idClicked).then((res) => {
            setSupplierClicked(res);
        });
    }, [idClicked]);

    const providerValues = {
        modalState,
        openModal,
        closeModal,
        pickId,
        supplierClicked,
    };
    return (
        <ModalContext.Provider value={providerValues}>
            {children}
        </ModalContext.Provider>
    );
};
export const useModalContext = () => useContext(ModalContext);
