import './styles/globals.css';
import { ThemeProvider } from './components/ThemeProvider';

export const metadata = {
    title: 'Portfolio - Your Name',
    description: 'A modern portfolio website built with Next.js and Three.js animations.',
};

export default function RootLayout({ children }) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body>
                <ThemeProvider>
                    {children}
                </ThemeProvider>
            </body>
        </html>
    );
} 