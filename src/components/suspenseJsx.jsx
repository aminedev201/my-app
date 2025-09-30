"use client";
export default function SuspenseJsx({title = 'Loading Post Details...' , description = 'Please wait while we fetch the content'}) {
    return (
         <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">   
                <div className="bg-white rounded-xl shadow-lg overflow-hidden p-8">
                    <div className="flex flex-col items-center justify-center py-12">
                        {/* Animated Spinner */}
                        <div className="relative inline-flex mb-6">
                            <div className="w-16 h-16 border-4 border-blue-200 border-t-blue-600 rounded-full animate-spin"></div>
                        </div>
                        
                        {/* Loading Text */}
                        <h2 className="text-2xl font-semibold text-gray-800 mb-2">{title}</h2>
                        <p className="text-gray-500">{description}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}