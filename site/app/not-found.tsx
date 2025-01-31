export default function NotFound() {
    return (
        <div className="flex min-h-screen flex-col items-center justify-center bg-black text-white">
            <h1 className="mb-4 text-4xl font-bold">404</h1>
            <p className="text-gray-300">Page not found.</p>
            <a href="/" className="mt-4 text-cyan-400 hover:text-cyan-200">
                Return Home
            </a>
        </div>
    );
}
