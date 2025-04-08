'use client';

import { useEffect } from 'react';
import Link from 'next/link';

export default function Error({
    error,
    reset,
}) {
    useEffect(() => {
        // Log the error to an error reporting service
        console.error(error);
    }, [error]);

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 dark:bg-gray-900">
            <div className="text-center px-4">
                <h1 className="text-6xl font-bold text-gray-900 dark:text-white mb-4">500</h1>
                <h2 className="text-2xl font-semibold text-gray-700 dark:text-gray-300 mb-4">
                    Something went wrong!
                </h2>
                <p className="text-gray-600 dark:text-gray-400 mb-8">
                    We apologize for the inconvenience. Please try again later.
                </p>
                <div className="space-x-4">
                    <button
                        onClick={reset}
                        className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
                    >
                        Try again
                    </button>
                    <Link
                        href="/"
                        className="inline-block bg-gray-600 text-white px-6 py-3 rounded-lg hover:bg-gray-700 transition-colors"
                    >
                        Go Back Home
                    </Link>
                </div>
            </div>
        </div>
    );
} 