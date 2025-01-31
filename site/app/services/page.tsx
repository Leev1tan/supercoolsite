import Link from 'next/link';

export default function ServicesOverview() {
    return (
        <section className="mt-8">
            <h1 className="mb-4 text-3xl font-bold text-cyan-400">Services</h1>
            <p className="mb-6 text-gray-300">
                We offer Television packages and Additional Services. Select a category below:
            </p>
            <div className="flex gap-4">
                <Link
                    href="/services/television"
                    className="rounded bg-cyan-600 px-6 py-3 text-white transition hover:bg-cyan-500"
                >
                    Television
                </Link>
                <Link
                    href="/services/additional"
                    className="rounded bg-pink-600 px-6 py-3 text-white transition hover:bg-pink-500"
                >
                    Additional
                </Link>
            </div>
        </section>
    );
}
