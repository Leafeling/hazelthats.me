import styles from '@/styles/ProjectTile.module.scss';

export function ProjectTile({ children, background, links }: {
    children: React.ReactNode,
    background: string,
    links?: React.ReactNode
}) {
    
    return <div className={ styles.tile }>
        <div className={ styles.thumbnail } style={{ background, backgroundSize: 'cover' }}>
            <div className={ styles.filter }></div>
        </div>
        <div className={ styles.content }>
            {<div className={ styles.description }>
                {children}
            </div>}
            {links && <div className={ styles.links }>
                {links}
            </div>}
        </div>
    </div>;
}