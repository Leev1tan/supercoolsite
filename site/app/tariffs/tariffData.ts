// app/tariffs/tariffData.ts

export type TariffPlan = {
    speed: string;        // e.g. "�� 50 ���/�"
    isUnlimited: boolean; // e.g. always true for "�����"
    price: number;        // e.g. 250
};

export type TariffSet = {
    id: string;            // unique ID, e.g. "barishivka-private" or "arkadiivka"
    locationName: string;  // e.g. "��������� (������� �������)"
    region?: string;       // e.g. "������� �������"
    plans: TariffPlan[];
    images?: string[];     // array of image URLs, or placeholders
};

export const allTariffSets: TariffSet[] = [
    {
        id: "Barsik",
        locationName: "��������� (��������������  �������) - #1",
        plans: [
            { speed: "�� 50 ���/�", isUnlimited: true, price: 180 },
            { speed: "�� 100 ���/�", isUnlimited: true, price: 210 },
            { speed: "�� 1 ���/�", isUnlimited: true, price: 300 },
        ],
    },
    {
        id: "BarCom",
        locationName: "��������� (������� �������) - #2",
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
