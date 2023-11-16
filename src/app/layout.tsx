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
                <footer>
                    <div className='webring-thing' style={{backgroundImage: 'url(/qc-88x31.gif)'}}>
                        <a href='https://webring.queercoded.dev/prev?source=hazelthats.me'></a>
                        <a href='https://webring.queercoded.dev/next?source=hazelthats.me'></a>
                    </div>
                </footer>
            </body>
        </html>
    )

}
