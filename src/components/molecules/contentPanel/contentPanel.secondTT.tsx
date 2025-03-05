import { Match } from "../../../types/models"
import styles from './contentPanel.module.css'
import TeamName from "../../atoms/LayoutCell/LayoutCell.teamName"
import Score from "../../atoms/LayoutCell/LayoutCell.score"
import MatchStatus from "../../atoms/LayoutCell/LayoutCell.status"
import PlayerStat from "../PlayersStat/PlayersStat"
import Arrow from "../../assets/ArrowIcon/Arrow"
import { useState } from "react"


type Props = {
    match: Match
}


export default function ContentPanelFinal(props: Props) {
    const match = props.match

    const players = {
        homePlayers: match.homeTeam.players,
        awayPlayers: match.awayTeam.players,
    }

    const [opened, setOpened ] = useState(false)

    const open = opened ? `${styles.contentPanel__icon} ${styles.contentPanel__icon_open}` : styles.contentPanel__icon 

    const contentPanelStyled = opened ? `${styles.contentPanel} ${styles.contentPanel_opened}` : styles.contentPanel 

    return (
        <div className={contentPanelStyled} onClick={() => setOpened(!opened)}>
            <div className={styles.contentPanel__commonInfo}>
                <TeamName teamName={match.awayTeam.name} />
                <Score 
                    scoreData={[match.awayScore, match.homeScore]} 
                    MatchStatus={<MatchStatus status={match.status === 'live'} />} />
                <TeamName teamName={match.homeTeam.name} />
                <div className={open}>
                    <Arrow />
                </div>
            </div>
            <div className={styles.contentPanel__additionalInfo}>
                <PlayerStat playersData={players} additionalData={props.match} />
            </div>
        </div>
    )
}