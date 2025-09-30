export default function Loading() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center">
            <div className="text-center">
                {/* Spinner */}
                <div className="relative inline-flex">
                    <div className="w-16 h-16 border-4 border-blue-200 border-t-blue-600 rounded-full animate-spin"></div>
                </div>
                
                {/* Loading Text */}
                <p className="mt-4 text-lg font-medium text-gray-700">Loading...</p>
                <p className="mt-2 text-sm text-gray-500">Please wait a moment</p>
            </div>
        </div>
    );
}