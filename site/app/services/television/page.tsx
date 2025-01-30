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
        price: '99 ��� / �����',
        features: [
            'ʳ������',
            '������ ����� ����������',
            '��������� ������ ����� �����������',
            '�������� � 5-�� �������� �� ���� ����',
            '����������� ����������� � HD',
            '��������� ����������',
        ],
    },
    {
        name: 'M',
        channels: 233,
        price: '*99 ��� / ����� (������� ����)',
        features: [
            'ʳ������',
            '������ ����� ����������',
            '��������� ������ ����� �����������',
            '�������� � 5-�� �������� �� ���� ����',
            '����������� ����������� � HD',
            '��������� ����������',
            'Գ����� ����������',
            '�������� ����������',
            '������ ����������',
            '�������� ����������',
        ],
    },
    {
        name: 'L',
        channels: 258,
        price: '197 ��� / �����',
        features: [
            '*7 ��� - 0 ���',
            '������ ����� ����������',
            '��������� ������ ����� �����������',
            '�������� � 5-�� �������� �� ���� ����',
            '����������� ����������� � HD',
            '��������� ����������',
            'Գ����� ����������',
            '�������� ����������',
            '������ ����������',
            '�������� ����������',
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
                        <h2 className="mb-2 text-xl font-bold text-white">{pkg.name} � {pkg.channels} ������</h2>
                        <ul className="flex-1 space-y-1 text-gray-300">
                            {pkg.features.map((f, idx) => (
                                <li key={idx}>� {f}</li>
                            ))}
                        </ul>
                        <p className="mt-2 font-semibold text-pink-300">{pkg.price}</p>
                        <button className="mt-auto rounded bg-cyan-600 px-4 py-2 text-white transition hover:bg-cyan-500">
                            ϲ��������
                        </button>
                    </div>
                ))}
            </div>
        </section>
    );
}
