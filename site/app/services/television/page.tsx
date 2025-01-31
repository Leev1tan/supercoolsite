// app/services/television/page.tsx
type TvPackage = {
    name: string; // "S", "M", "L"
    channels: number;
    price: string;
    features: string[];
};

const tvPackages: TvPackage[] = [
    {
        name: 'S',
        channels: 160,
        price: '99 грн / місяць',
        features: [
            'Кінозали',
            'Висока якість зображення',
            'Управління прямим ефіром телебачення',
            'Перегляд з 5-ти пристроїв за одну ціну',
            'Національне телебачення в HD',
            'Регіональні телеканали',
        ],
    },
    {
        name: 'M',
        channels: 233,
        price: '*99 грн / місяць (акційна ціна)',
        features: [
            'Кінозали',
            'Висока якість зображення',
            'Управління прямим ефіром телебачення',
            'Перегляд з 5-ти пристроїв за одну ціну',
            'Національне телебачення в HD',
            'Регіональні телеканали',
            'Фільмові телеканали',
            'Преміальні телеканали',
            'Дитячі телеканали',
            'Спортивні телеканали',
        ],
    },
    {
        name: 'L',
        channels: 258,
        price: '197 грн / місяць',
        features: [
            '*7 днів - 0 грн',
            'Висока якість зображення',
            'Управління прямим ефіром телебачення',
            'Перегляд з 5-ти пристроїв за одну ціну',
            'Національне телебачення в HD',
            'Регіональні телеканали',
            'Фільмові телеканали',
            'Преміальні телеканали',
            'Дитячі телеканали',
            'Спортивні телеканали',
        ],
    },
];

export default function TelevisionPage() {
    return (
        <section className="mt-8 space-y-6">
            <h1 className="text-3xl font-bold text-cyan-400">Television Packages</h1>
            <p className="text-gray-300">Enjoy Trinity TV with flexible plans: S, M, or L</p>
            <div className="grid gap-4 md:grid-cols-3">
                {tvPackages.map((pkg) => (
                    <div key={pkg.name} className="glass-panel flex flex-col p-6">
                        <h2 className="mb-2 text-xl font-bold text-white">{pkg.name} — {pkg.channels} каналів</h2>
                        <ul className="flex-1 space-y-1 text-gray-300">
                            {pkg.features.map((f, idx) => (
                                <li key={idx}>• {f}</li>
                            ))}
                        </ul>
                        <p className="mt-2 font-semibold text-pink-300">{pkg.price}</p>
                        <button className="mt-auto rounded bg-cyan-600 px-4 py-2 text-white transition hover:bg-cyan-500">
                            ПІДКЛЮЧИТИ
                        </button>
                    </div>
                ))}
            </div>
        </section>
    );
}
