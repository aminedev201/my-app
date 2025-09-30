import Link from "next/link";

export default function NavBar() {
    return (
        <nav className="bg-gray-900 border-b border-gray-800 mb-4">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center space-x-8 h-16">
                    <Link 
                        href={'/'} 
                        className="text-gray-300 hover:text-white border-b-2 border-transparent hover:border-blue-500 pb-1 transition-all duration-200"
                    >
                        Home
                    </Link>
                    <Link 
                        href={'/posts'} 
                        className="text-gray-300 hover:text-white border-b-2 border-transparent hover:border-blue-500 pb-1 transition-all duration-200"
                    >
                        Posts
                    </Link>
                </div>
            </div>
        </nav>
    )
}