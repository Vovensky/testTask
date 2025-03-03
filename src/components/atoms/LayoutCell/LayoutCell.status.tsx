import styles from './LayoutCell.module.css'

type Props = {
    status: boolean
}

export default function MatchStatus(props: Props) {

    const status = props.status

    if(status) {
        return (
            <div className={`${styles.matchStatus} ${styles.matchStatus_live}`}>
                Live
            </div>
        )
    }

    return (
            <div className={`${styles.matchStatus} ${styles.matchStatus_finished}`}>
                Finished
            </div>
    )
}