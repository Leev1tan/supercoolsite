import { coverageData, CoverageItem } from '../coverageData';
import Link from 'next/link';
import { allTariffSets, TariffSet } from '@/app/tariffs/tariffData';
import { useModal } from '@/app/components/ModalProvider';

interface CoverageTownProps {
    params: { town: string };
}

export default function CoverageTownPage({ params }: CoverageTownProps) {
    const townName = decodeURIComponent(params.town).toLowerCase();
    const coverageItem: CoverageItem | undefined = coverageData.find(
        (c) => c.name.toLowerCase() === townName
    );

    // In a Client Component, you'd do: const { openModal } = useModal();
    // But since this is a server component file by default, you can’t directly call useModal() here.
    // Instead, you can transform this into a client component or handle the connect differently.
    // If you want client-based modals, do "use client" at the top & import your hooks.

    if (!coverageItem) {
        return (
            <div className="mt-8 text-center text-red-400">
                <h2 className="text-2xl font-bold">Town not found</h2>
            </div>
        );
    }

    // Filter tariffs by matching coverage name:
    const relevantTariffSets: TariffSet[] = allTariffSets.filter((set) =>
        set.locationName.toLowerCase().includes(coverageItem.name.toLowerCase())
    );

    return (
        <section className="mt-8 space-y-4">
            <h1 className="text-3xl font-bold text-cyan-400">{coverageItem.name}</h1>
            <p className="text-gray-300">Region: {coverageItem.region}</p>

            {relevantTariffSets.length > 0 ? (
                relevantTariffSets.map((set) => (
                    <div key={set.id} className="glass-panel space-y-3 p-4">
                        <h2 className="mb-2 text-xl font-bold text-white">
                            Tariffs for {set.locationName}
                        </h2>
                        <div className="flex flex-col gap-2">
                            {set.plans.map((plan, idx) => (
                                <div key={idx} className="bg-black/40 rounded-md p-3">
                                    <div className="flex items-center justify-between">
                                        <span className="text-gray-200">{plan.speed}</span>
                                        <span className="font-medium text-pink-300">
                                            {plan.price} грн/міс
                                        </span>
                                    </div>
                                    {plan.isUnlimited && (
                                        <p className="text-sm text-gray-400">Безлім</p>
                                    )}
                                    {/* You’d need a client component or a special approach to openModal here */}
                                    <button
                                        className="mt-2 rounded bg-cyan-600 px-3 py-1 text-white transition hover:bg-cyan-500"
                                    // onClick={() => openModal({ town: coverageItem.name })}
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
                    No specific tariffs available for this town. Please check our main Tariffs page.
                </p>
            )}

            <Link
                href="/tariffs"
                className="inline-block rounded bg-pink-600 px-4 py-2 text-white transition hover:bg-pink-500"
            >
                Переглянути всі тарифи
            </Link>
        </section>
    );
}
