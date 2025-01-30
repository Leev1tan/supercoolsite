// app/tariffs/tariffData.ts

export type TariffPlan = {
    speed: string;        // e.g. "до 50 ћб≥т/с"
    isUnlimited: boolean; // e.g. always true for "Ѕезл≥м"
    price: number;        // e.g. 250
};

export type TariffSet = {
    id: string;            // unique ID, e.g. "barishivka-private" or "arkadiivka"
    locationName: string;  // e.g. "Ѕариш≥вка (ѕриватн≥ будинки)"
    region?: string;       // e.g. " ињвська область"
    plans: TariffPlan[];
    images?: string[];     // array of image URLs, or placeholders
};

export const allTariffSets: TariffSet[] = [
    {
        id: "Barsik",
        locationName: "Ѕариш≥вка (Ѕагатоповерхов≥  будинки) - #1",
        plans: [
            { speed: "до 50 ћб≥т/с", isUnlimited: true, price: 180 },
            { speed: "до 100 ћб≥т/с", isUnlimited: true, price: 210 },
            { speed: "до 1 √б≥т/с", isUnlimited: true, price: 300 },
        ],
    },
    {
        id: "BarCom",
        locationName: "Ѕариш≥вка (ѕриватн≥ будинки) - #2",
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
