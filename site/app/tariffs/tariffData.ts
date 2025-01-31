// app/tariffs/tariffData.ts

export type TariffPlan = {
    speed: string;        // e.g. "до 50 Мбіт/с"
    isUnlimited: boolean;
    price: number;        // e.g. 250
};

export type TariffSet = {
    id: string;
    locationName: string;
    region?: string;
    plans: TariffPlan[];
};

export const allTariffSets: TariffSet[] = [
    {
        id: "Barsik",
        locationName: "Баришівка (Багатоповерхові будинки)",
        plans: [
            { speed: "до 50 Мбіт/с", isUnlimited: true, price: 180 },
            { speed: "до 100 Мбіт/с", isUnlimited: true, price: 210 },
            { speed: "до 1 Гбіт/с", isUnlimited: true, price: 300 },
        ],
    },
    {
        id: "BarCom",
        locationName: "Баришівка (Приватні будинки)",
        plans: [
            { speed: "до 50 Мбіт/с", isUnlimited: true, price: 250 },
            { speed: "до 100 Мбіт/с", isUnlimited: true, price: 280 },
            { speed: "до 1 Гбіт/с", isUnlimited: true, price: 350 },
        ],
    },
    {
        id: "Rudik",
        locationName: "с. Аркадіївка",
        region: "Київська область",
        plans: [
            { speed: "до 100 Мбіт/с", isUnlimited: true, price: 350 },
            { speed: "до 1 Гбіт/с", isUnlimited: true, price: 460 },
        ],
    },
];
