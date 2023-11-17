import styles from '@/styles/ProjectTile.module.scss';

export function ProjectTile({ children, background, links }: {
    children: React.ReactNode,
    background: string,
    links: React.ReactNode
}) {
    
    return <div className={ styles.tile } style={{ background, backgroundSize: 'cover' }}>
        <div className={ styles.content }>
            <div className={ styles.inner }>
                {children}
            </div>
            <div className={ styles.links }>
                {links}
            </div>
        </div>
    </div>;
}