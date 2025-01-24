import { FC } from 'react';
import Tag from '../Tag/Tag'
import styles from './sidePanel.module.css'

interface SidePanelProps {
    image: string,
    title: string,
    subtitle: string,
    tags: string[],
}


const SidePanel:FC<SidePanelProps> = ({image, title, subtitle, tags }) => {
    return(
        <div className={styles.sidePanel}>
            <div className={styles.details}>
                <img src={image} />
                <p className={styles.title}>{title}</p>
                <p className={styles.subtitle}>{subtitle}</p>
            </div>
            <span className={styles.tags}>
                {tags.map((tag: string, index) => (
                    <Tag key={index} tag={tag} />
                ))}
            </span>
        </div>
    )
  
}

export default SidePanel;