import { ReactElement } from 'react'
import styles from './LayoutCell.module.css'
import { useState, useEffect } from 'react'

type Props = {
    scoreData: Number[]
    MatchStatus: ReactElement
}

export default function Score(props: Props) {

    const scoreData = props.scoreData
    const MatchStatus = props.MatchStatus

    const [visible, setVisible] = useState(true);


    useEffect(() => {
        setVisible(false);
        const timer = setTimeout(() => setVisible(true), 300);
        return () => clearTimeout(timer);
      }, [scoreData, MatchStatus]);

    const textAnimation = `${visible ? styles.text_visible : styles.text_hidden }`


    return (
        <div className={styles.mainLayout__Cell}>
            <div className={styles.matchStatus_container} >
                <span className={`${styles.matchStatus_score} ${textAnimation}`}>{ scoreData[0] + ' : ' + scoreData[1]}</span>
                <span className={textAnimation}> { MatchStatus } </span>
            </div>
        </div>
    )
}