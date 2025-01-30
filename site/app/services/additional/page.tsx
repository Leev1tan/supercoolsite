// app/services/additional/page.tsx
type AdditionalService = {
    title: string;
    price: string;
    description?: string;
};

const additionalServices: AdditionalService[] = [
    { title: 'Статична IP-адреса', price: '50 грн/місяць' },
    { title: 'Виклик фахівця*', price: '150 грн' },
    { title: 'Терміновий виклик фахівця**', price: '300 грн' },
    { title: 'Налаштування Wi-Fi роутера', price: '50 грн' },
    { title: 'Обтиск UTP кабелю', price: '50 грн' },
    { title: 'Налаштування IPTV приставки та/або телевізора', price: '100 грн' },
    { title: 'Додаткове придбання кабелю UTP', price: '10 грн/метр' },
    { title: 'Додаткове придбання оптоволоконного кабелю', price: '15 грн/метр' },
    { title: 'Зварювальні роботи на оптичному кабелі на об\'єкті клієнта', price: '150 грн' },
    { title: 'Робота фахівця з ПК', price: 'від 150 грн' },
    { title: 'Роботи, пов\'язані з виїздом монтажної бригади до абонента', price: 'від 150 грн' },
];

export default function AdditionalServicesPage() {
    return (
        <section className="mt-8 space-y-6">
            <h1 className="text-3xl font-bold text-cyan-400">Додаткові послуги</h1>
            <table className="min-w-full text-gray-300">
                <thead>
                    <tr className="border-white/20 border-b">
                        <th className="py-2 text-left">Послуга</th>
                        <th className="py-2 text-left">Вартість</th>
                    </tr>
                </thead>
                <tbody>
                    {additionalServices.map((srv) => (
                        <tr key={srv.title} className="border-white/10 border-b hover:bg-black/40">
                            <td className="py-2">{srv.title}</td>
                            <td className="py-2">{srv.price}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <p className="text-sm text-gray-400">
                *Без урахування ремонтних, монтажних і налагоджувальних робіт, якщо проблема з доступом до мережі Інтернет не на стороні провайдера.
            </p>
            <p className="text-sm text-gray-400">
                **Виклик фахівця у неробочий час, а також у вихідні та святкові дні вважається терміновим. Ремонтні, монтажні та налагоджувальні роботи сплачуються окремо.
            </p>
        </section>
    );
}
