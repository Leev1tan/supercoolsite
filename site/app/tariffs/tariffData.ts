// app/tariffs/tariffData.ts

export type TariffPlan = {
    speed: string;        // e.g. "до 50 ћб≥т/с"
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
        locationName: "Ѕариш≥вка (Ѕагатоповерхов≥ будинки)",
        plans: [
            { speed: "до 50 ћб≥т/с", isUnlimited: true, price: 180 },
            { speed: "до 100 ћб≥т/с", isUnlimited: true, price: 210 },
            { speed: "до 1 √б≥т/с", isUnlimited: true, price: 300 },
        ],
    },
    {
        id: "BarCom",
        locationName: "Ѕариш≥вка (ѕриватн≥ будинки)",
        plans: [
            { speed: "до 50 ћб≥т/с", isUnlimited: true, price: 250 },
            { speed: "до 100 ћб≥т/с", isUnlimited: true, price: 280 },
            { speed: "до 1 √б≥т/с", isUnlimited: true, price: 350 },
        ],
    },
    {
        id: "Rudik",
        locationName: "с. јркад≥њвка",
        region: " ињвська область",
        plans: [
            { speed: "до 100 ћб≥т/с", isUnlimited: true, price: 350 },
            { speed: "до 1 √б≥т/с", isUnlimited: true, price: 460 },
        ],
    },
];
