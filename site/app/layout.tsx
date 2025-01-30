import './globals.css';
import type { Metadata } from 'next';
import { Orbitron } from 'next/font/google';
import ModalProvider from './components/ModalProvider';
import AnimatedWrapper from './components/AnimatedWrapper';

const orbitron = Orbitron({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: 'Baryshivka.Net ISP',
    description: 'A futuristic ISP site with coverage map and tariffs.',
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" className={orbitron.className}>
            <body className="min-h-screen bg-black text-white">
                <ModalProvider>
                    <header className="bg-black/80 border-white/10 sticky top-0 z-50 border-b backdrop-blur">
                        <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
                            <div className="text-2xl font-bold text-cyan-400">
                                Baryshivka.Net
                            </div>
                            <ul className="flex gap-6">
                                <li>
                                    <a href="/" className="transition hover:text-cyan-400">
                                        Home
                                    </a>
                                </li>
                                <li>
                                    <a href="/coverage" className="transition hover:text-cyan-400">
                                        Coverage
                                    </a>
                                </li>
                                <li>
                                    <a href="/tariffs" className="transition hover:text-cyan-400">
                                        Tariffs
                                    </a>
                                </li>
                                <li>
                                    <a href="/services" className="transition hover:text-cyan-400">
                                        Services
                                    </a>
                                </li>
                                <li>
                                    <a href="/about" className="transition hover:text-cyan-400">
                                        About
                                    </a>
                                </li>
                            </ul>
                        </nav>
                    </header>

                    <main className="mx-auto max-w-6xl px-4 py-6">
                        <AnimatedWrapper>{children}</AnimatedWrapper>
                    </main>

                    <footer className="bg-black/90 border-white/10 border-t py-4 text-center text-sm text-gray-400">
                        &copy; 2025 Baryshivka.Net. All rights reserved.
                    </footer>
                </ModalProvider>
            </body>
        </html>
    );
}
