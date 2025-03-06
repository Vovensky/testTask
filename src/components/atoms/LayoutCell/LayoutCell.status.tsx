import styles from './LayoutCell.module.css'

type Props = {
    status: string
}

export default function MatchStatus(props: Props) {

    const status = props.status

    if(status === 'Ongoing') {
        return (
            <div className={`${styles.matchStatus} ${styles.matchStatus_live}`}>
                Live
            </div>
        )
    } else if (status === 'Scheduled') {
        return (
            <div className={`${styles.matchStatus} ${styles.matchStatus_scheduled}`}>
                Scheduled
            </div>
        )  
    }

    return (
            <div className={`${styles.matchStatus} ${styles.matchStatus_finished}`}>
                Finished
            </div>
    )
}