import styles from './LayoutCell.module.css'

type Props = {
    label: string,
    killCount: number,

}

export default function AdditionalInfo(props: Props) {
    const playerScore = props.killCount || 0
    const label = props.label

    return (
        <div className={styles.infoContainer}>
            <span className={styles.additionalInfo__text}>
                {label}:
            </span>
            {playerScore}
        </div>
    )
} 