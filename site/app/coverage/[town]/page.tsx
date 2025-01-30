// app/coverage/[town]/page.tsx

import { coverageData, CoverageItem } from '../coverageData';
import Link from 'next/link';
import { allTariffSets, TariffSet } from '../../tariffs/tariffData';
import { useModal } from '../../components/ModalProvider';

interface CoverageTownProps {
    params: { town: string };
}

export default function CoverageTownPage({ params }: CoverageTownProps) {
    const { town } = params;
    const coverageItem: CoverageItem | undefined = coverageData.find(
        (c) => c.name.toLowerCase() === decodeURIComponent(town).toLowerCase()
    );

    const { openModal } = useModal();

    if (!coverageItem) {
        return (
            <div className="mt-8 text-center text-red-400">
                <h2 className="text-2xl font-bold">Town not found</h2>
            </div>
        );
    }

    // Find corresponding tariff sets
    const relevantTariffSets: TariffSet[] = allTariffSets.filter((set) =>
        set.locationNames.some(
            (location) => location.toLowerCase() === coverageItem.name.toLowerCase()
        )
    );

    return (
        <section className="mt-8 space-y-4">
            <h1 className="text-3xl font-bold text-cyan-400">{coverageItem.name}</h1>
            <p className="text-gray-300">Region: {coverageItem.region}</p>
            <div className="space-y-6">
                {relevantTariffSets.length > 0 ? (
                    relevantTariffSets.map((set) => (
                        <div key={set.id} className="glass-panel p-4">
                            <h2 className="mb-2 text-xl font-bold text-white">
                                Tariffs for {set.locationNames.join(', ')}
                            </h2>
                            <div className="flex flex-col gap-2">
                                {set.plans.map((plan, idx) => (
                                    <div key={idx} className="bg-black/40 rounded-md p-3">
                                        <div className="flex items-center justify-between">
                                            <span className="text-gray-200">{plan.speed}</span>
                                            <span className="font-medium text-pink-300">
                                                {plan.price} грн / місяць
                                            </span>
                                        </div>
                                        {plan.isUnlimited && (
                                            <p className="text-sm text-gray-400">Безлім</p>
                                        )}
                                        <button
                                            className="mt-2 rounded bg-cyan-600 px-3 py-1 text-white transition hover:bg-cyan-500"
                                            onClick={() => openModal({ town: coverageItem.name })}
                                        >
                                            ПІДКЛЮЧИТИ
                                        </button>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))
                ) : (
                    <p className="text-gray-300">
                        No specific tariffs available for this town. Please check our main
                        Tariffs page.
                    </p>
                )}
            </div>
            <Link
                href="/tariffs"
                className="inline-block rounded bg-pink-600 px-4 py-2 text-white transition hover:bg-pink-500"
            >
                Переглянути всі тарифи
            </Link>
        </section>
    );
}
