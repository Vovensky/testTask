import styles from './LayoutCell.module.css'
import classes from '../../molecules/PlayersStat/PlayersStat.module.css'

type Props = {
    label: string,
    value: number,

}

export default function AdditionalInfo(props: Props) {
    const value = props.value || 0
    const label = props.label

    return (
        <div className={`${styles.infoContainer} ${classes.statElement}`}>
            <span className={styles.additionalInfo__text}>
                {label}:
            </span>
            {value}
        </div>
    )
} 