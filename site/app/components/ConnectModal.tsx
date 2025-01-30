// app/components/ConnectModal.tsx
"use client";

import { useState } from "react";
import { motion } from "framer-motion";

type ConnectModalProps = {
    isOpen: boolean;
    onCloseAction: () => void;
    defaultTown?: string;
    defaultTariff?: string;
};

const backdropVariants = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 },
};

const modalVariants = {
    hidden: { y: "-100vh", opacity: 0 },
    visible: {
        y: "0",
        opacity: 1,
        transition: { delay: 0.2 },
    },
};

export default function ConnectModal({
    isOpen,
    onCloseAction,
    defaultTown,
    defaultTariff,
}: ConnectModalProps) {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [phone, setPhone] = useState("");
    const [town, setTown] = useState(defaultTown || "");
    const [tariff, setTariff] = useState(defaultTariff || "");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Connect request:", {
            firstName,
            lastName,
            phone,
            town,
            tariff,
        });
        onCloseAction();
    };

    if (!isOpen) return null;

    return (
        <motion.div
            className="bg-black/60 fixed inset-0 z-50 flex items-center justify-center"
            variants={backdropVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            onClick={onCloseAction}
        >
            <motion.div
                className="relative w-[90%] max-w-md rounded-lg bg-midnight p-6"
                variants={modalVariants}
                onClick={(e) => e.stopPropagation()}
            >
                <button
                    className="absolute right-2 top-2 text-gray-300 hover:text-white"
                    onClick={onCloseAction}
                >
                    &times;
                </button>
                <h2 className="mb-4 text-xl font-bold text-cyan-400">Connect</h2>
                <form onSubmit={handleSubmit} className="space-y-3">
                    <div>
                        <label className="mb-1 block text-gray-300">First Name</label>
                        <input
                            type="text"
                            className="w-full rounded border border-gray-600 bg-gray-800 px-3 py-2 text-white focus:outline-none"
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                            required
                        />
                    </div>
                    <div>
                        <label className="mb-1 block text-gray-300">Last Name</label>
                        <input
                            type="text"
                            className="w-full rounded border border-gray-600 bg-gray-800 px-3 py-2 text-white focus:outline-none"
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                            required
                        />
                    </div>
                    <div>
                        <label className="mb-1 block text-gray-300">Phone</label>
                        <input
                            type="text"
                            className="w-full rounded border border-gray-600 bg-gray-800 px-3 py-2 text-white focus:outline-none"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            required
                        />
                    </div>
                    <div>
                        <label className="mb-1 block text-gray-300">Town (optional)</label>
                        <input
                            type="text"
                            className="w-full rounded border border-gray-600 bg-gray-800 px-3 py-2 text-white focus:outline-none"
                            value={town}
                            onChange={(e) => setTown(e.target.value)}
                        />
                    </div>
                    <div>
                        <label className="mb-1 block text-gray-300">Tariff (optional)</label>
                        <input
                            type="text"
                            className="w-full rounded border border-gray-600 bg-gray-800 px-3 py-2 text-white focus:outline-none"
                            value={tariff}
                            onChange={(e) => setTariff(e.target.value)}
                        />
                    </div>
                    <button
                        type="submit"
                        className="mt-2 w-full rounded bg-cyan-600 py-2 text-white hover:bg-cyan-500"
                    >
                        Submit
                    </button>
                </form>
            </motion.div>
        </motion.div>
    );
}
