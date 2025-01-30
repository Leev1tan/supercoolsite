// app/tariffs/page.tsx
import { allTariffSets } from "./tariffData";
import { useRouter } from 'next/navigation';

interface TariffsProps {
    searchParams: { id?: string };
}

export default function TariffsPage({ searchParams }: TariffsProps) {
    const { id } = searchParams;
    const setsToShow = id ? allTariffSets.filter((s) => s.id === id) : allTariffSets;

    return (
        <section className="mt-8 space-y-8">
            <h1 className="text-3xl font-bold text-cyan-400">Tariffs</h1>

            {setsToShow.length === 0 ? (
                <p className="text-red-400">No tariffs found for id: {id}</p>
            ) : (
                <div className="grid gap-6">
                    {setsToShow.map((set) => (
                        <div key={set.id} className="glass-panel p-4">
                            <h2 className="mb-2 text-xl font-bold text-white">
                                {set.locationNames.join(', ')}
                                {set.region && <span className="ml-2 text-sm text-gray-300">({set.region})</span>}
                            </h2>
                            <div className="flex flex-col gap-2">
                                {set.plans.map((plan, idx) => (
                                    <div key={idx} className="bg-black/40 rounded-md p-3">
                                        <div className="flex items-center justify-between">
                                            <span className="text-gray-200">{plan.speed}</span>
                                            <span className="font-medium text-pink-300">{plan.price} грн / місяць</span>
                                        </div>
                                        {plan.isUnlimited && <p className="text-sm text-gray-400">Безлім</p>}
                                        <button className="mt-2 rounded bg-cyan-600 px-3 py-1 text-white transition hover:bg-cyan-500">
                                            ПІДКЛЮЧИТИ
                                        </button>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </section>
    );
}
