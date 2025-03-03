import { ReactElement } from 'react'
import styles from './LayoutCell.module.css'

type Props = {
    scoreData: Number[]
    MatchStatus: ReactElement
}

export default function Score(props: Props) {

    const scoreData = props.scoreData
    const MatchStatus = props.MatchStatus

    return (
        <div className={styles.mainLayout__Cell}>
            <div className={styles.matchStatus_container} >
                <span className={styles.matchStatus_score}>{ scoreData[0] + ' : ' + scoreData[1]}</span>
                { MatchStatus }
            </div>
        </div>
    )
}