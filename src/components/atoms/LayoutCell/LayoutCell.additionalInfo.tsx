import styles from './LayoutCell.module.css'
import { useState, useEffect } from 'react'

type Props = {
    label: string,
    value: number,

}

export default function AdditionalInfo(props: Props) {
    const [visible, setVisible] = useState(true);
    const value = props.value || 0
    const label = props.label

    useEffect(() => {
        setVisible(false);
        const timer = setTimeout(() => setVisible(true), 300);
        return () => clearTimeout(timer);
      }, [value]);

    const textAnimation = `${visible ? styles.text_visible : styles.text_hidden }`

    return (
        <div className={styles.infoContainer}>
            <span className={styles.additionalInfo__label} >
                {label}:
            </span>
            <span className={`${styles.additionalInfo__text} ${textAnimation}`}>{value}</span>
        </div>
    )
} 