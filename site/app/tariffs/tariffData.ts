// app/tariffs/tariffData.ts

export type TariffPlan = {
    speed: string;        // e.g. "�� 50 ���/�"
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
        locationName: "��������� (�������������� �������)",
        plans: [
            { speed: "�� 50 ���/�", isUnlimited: true, price: 180 },
            { speed: "�� 100 ���/�", isUnlimited: true, price: 210 },
            { speed: "�� 1 ���/�", isUnlimited: true, price: 300 },
        ],
    },
    {
        id: "BarCom",
        locationName: "��������� (������� �������)",
        plans: [
            { speed: "�� 50 ���/�", isUnlimited: true, price: 250 },
            { speed: "�� 100 ���/�", isUnlimited: true, price: 280 },
            { speed: "�� 1 ���/�", isUnlimited: true, price: 350 },
        ],
    },
    {
        id: "Rudik",
        locationName: "�. ����䳿���",
        region: "������� �������",
        plans: [
            { speed: "�� 100 ���/�", isUnlimited: true, price: 350 },
            { speed: "�� 1 ���/�", isUnlimited: true, price: 460 },
        ],
    },
];
