import './styles/globals.css';
import { ThemeProvider } from './components/ThemeProvider';
import { Inter } from 'next/font/google';
import GoogleAnalytics from './components/GoogleAnalytics';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
    title: 'Portfolio - Your Name',
    description: 'A modern portfolio website built with Next.js and Three.js animations.',
};

export default function RootLayout({ children }) {
    return (
        <html lang="en" suppressHydrationWarning>
            <head>
                {process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID && (
                    <GoogleAnalytics GA_MEASUREMENT_ID={process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID} />
                )}
            </head>
            <body className={inter.className}>
                <ThemeProvider>
                    {children}
                </ThemeProvider>
            </body>
        </html>
    );
} 