export default function Home() {
    return (
        <section className="mt-10 flex flex-col items-center justify-center">
            <h1 className="mb-4 animate-pulse text-4xl font-extrabold text-cyan-400 sm:text-6xl">
                Connect to the Future
            </h1>
            <p className="mb-8 max-w-xl text-center text-gray-300">
                Experience blazing-fast internet in your town. Explore our coverage,
                discover the right tariff, and get connected in no time.
            </p>
            <a
                href="/coverage"
                className="transform rounded-md bg-cyan-600 px-6 py-3 text-lg shadow-lg
transition-transform hover:scale-105 hover:bg-cyan-500"
            >
                Check Coverage
            </a>
        </section>
    );
}
