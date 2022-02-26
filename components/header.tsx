import Image from 'next/image'
import Link from 'next/link'


export default function Header() {
    return (
        <header className="bg-white">
            <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-label="Top">
                <div className="w-full py-6 flex items-center justify-between border-b border-indigo-500 lg:border-none">
                    <div className="flex items-center">
                        <Link href="/">
                            <a>
                                <Image src="/konsorcium.png" width={291} height={141} alt="Konsorcium nevládních organizací pracujících s migranty" />
                            </a>
                        </Link>
                    </div>
                    <div className="ml-10 space-x-4 hidden">
                        <Link href="/nabidka">
                        <a
                            className="inline-block bg-blue-600 py-2 px-4 border border-transparent rounded-md text-base font-medium text-white hover:bg-opacity-75"
                        >
                            Nabídnout pomoc
                        </a>
                        </Link>
                        <a
                        href="#"
                        className="inline-block bg-white py-2 px-4 border border-transparent rounded-md text-base font-medium text-blue-600 hover:bg-blue-50"
                        >
                        Vyhledat pomoc
                        </a>
                    </div>
                </div>
            </nav>
        </header>
    )
}