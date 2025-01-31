// app/tariffs/TariffsClient.tsx
"use client"

import { useSearchParams } from 'next/navigation'
import { useModal } from '@/app/components/ModalProvider'

type Tariff = {
    id: number
    name: string
    speed: string
    price: number
    coverageTowns: string[]
}

const allTariffs: Tariff[] = [
    {
        id: 1,
        name: 'Basic Warp',
        speed: '100 Mbps',
        price: 250,
        coverageTowns: ['Baryshivka', 'Arkadiivka']
    },
    {
        id: 2,
        name: 'Hyper Jump',
        speed: '300 Mbps',
        price: 400,
        coverageTowns: ['Baryshivka', 'Selychivka']
    },
    {
        id: 3,
        name: 'Lightspeed',
        speed: '500 Mbps',
        price: 600,
        coverageTowns: ['Selychivka', 'Arkadiivka']
    },
]
export default function TariffsClient({ town }: { town?: string }) {
    const { openModal } = useModal()

    const tariffs = town
        ? allTariffs.filter(t => t.coverageTowns.includes(town))
        : allTariffs

    return (
        <section>
            {/* same rendering code as before */}
            {tariffs.map(t => (
                <div key={t.id} className="glass-panel p-4">
                    <h2>{t.name}</h2>
                    <p>Speed: {t.speed}</p>
                    <p>Price: {t.price} UAH/month</p>
                    <button
                        className="mt-auto rounded bg-cyan-600 px-4 py-2 text-white hover:bg-cyan-500"
                        onClick={() => openModal({ town, tariff: t.name })}
                    >
                        Пікдлючити
                    </button>
                </div>
            ))}
        </section>
    )
}