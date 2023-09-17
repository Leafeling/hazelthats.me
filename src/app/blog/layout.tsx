import '@/styles/globals.scss';
import styles from '@/styles/Blog.module.scss';

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <div className={styles.post}>
        {children}
    </div>;
}
