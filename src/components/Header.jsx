import Link from 'next/link';

export default function Header() {
    return (
        <header className="bg-white shadow-md py-4">
            <div className="container flex justify-between items-center">
                <div className="text-xl font-bold text-accent">Истории</div>
                <nav className="space-x-6">
                    <Link href="/" className="text-accent hover:text-blue-700 transition-colors">
                        Главная
                    </Link>
                    <Link href="/about" className="text-accent hover:text-blue-700 transition-colors">
                        О сайте
                    </Link>
                </nav>
            </div>
        </header>
    );
}