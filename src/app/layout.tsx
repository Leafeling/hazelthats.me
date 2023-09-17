import '@/styles/globals.scss';
import { Metadata } from 'next';

export const metadata: Metadata = {
    viewport: "width=device-width, initial-scale=1",
    icons: "data:,",
    twitter: {
        site: "hazelthats.me",
    }
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html>
            <body>
                <main id='app'>
                    {children}
                </main>
            </body>
        </html>
    )

}
