"use client";

import { createContext, useContext, useState } from "react";
import ConnectModal from "./ConnectModal";
import { AnimatePresence } from "framer-motion";

type ModalData = {
    town?: string;
    tariff?: string;
};

type ModalContextValue = {
    openModal: (data?: ModalData) => void;
    closeModal: () => void;
};

const ModalContext = createContext<ModalContextValue>({
    openModal: () => { },
    closeModal: () => { },
});

export function useModal() {
    return useContext(ModalContext);
}

export default function ModalProvider({ children }: { children: React.ReactNode }) {
    const [isOpen, setIsOpen] = useState(false);
    const [defaultTown, setDefaultTown] = useState("");
    const [defaultTariff, setDefaultTariff] = useState("");

    function openModal(data?: ModalData) {
        if (data?.town) setDefaultTown(data.town);
        if (data?.tariff) setDefaultTariff(data.tariff);
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
        setDefaultTown("");
        setDefaultTariff("");
    }

    return (
        <ModalContext.Provider value={{ openModal, closeModal }}>
            {children}
            <AnimatePresence>
                {isOpen && (
                    <ConnectModal
                        isOpen={isOpen}
                        onCloseAction={closeModal}
                        defaultTown={defaultTown}
                        defaultTariff={defaultTariff}
                    />
                )}
            </AnimatePresence>
        </ModalContext.Provider>
    );
}
