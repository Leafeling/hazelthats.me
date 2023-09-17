import styles from '@/styles/BlogPost.module.scss';

export default function BlogPost({
    href,
    title,
    description,
    date
}: {
    href: string,
    title: string,
    description: string,
    date: string
}) {
    return (
        <a className={styles.default} href={href}>
            <div className={styles.content}>
                <div>
                    <span className={styles.date}>{date}</span>
                    <h1>{title}</h1>
                </div>
                <p>{description}</p>
            </div>
        </a>
    )
}