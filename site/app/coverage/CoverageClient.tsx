// app/coverage/CoverageClient.tsx
"use client";

import { useRouter } from "next/navigation";
import { useModal } from "@/app/components/ModalProvider";
import { CoverageItem } from "./coverageData";

export default function CoverageClient({ coverageList }: { coverageList: CoverageItem[] }) {
    const router = useRouter();
    const { openModal } = useModal();

    const handleTownClick = (townName: string) => {
        router.push(`/coverage/${encodeURIComponent(townName)}`);
    };

    return (
        <section className="mt-8 space-y-8">
            <h1 className="text-3xl font-bold text-cyan-400">Coverage</h1>
            <div className="glass-panel p-6">
                <ul className="space-y-2">
                    {coverageList.map((town) => (
                        <li
                            key={town.name}
                            className="bg-black/40 rounded-md p-4 transition hover:bg-black/60"
                        >
                            <div className="flex items-center justify-between">
                                <span className="text-lg font-medium">
                                    {town.name}{" "}
                                    <span className="text-sm text-gray-400">({town.region})</span>
                                </span>
                                <div className="flex gap-2">
                                    <button
                                        className="rounded bg-cyan-600 px-4 py-2 text-white transition hover:bg-cyan-500"
                                        onClick={() => handleTownClick(town.name)}
                                    >
                                        Детальніше
                                    </button>
                                    <button
                                        className="rounded bg-pink-600 px-4 py-2 text-white transition hover:bg-pink-500"
                                        onClick={() => openModal({ town: town.name })}
                                    >
                                        Підключити
                                    </button>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
}
