import { Match } from "../../../types/models"
import styles from './contentPanel.module.css'
import TeamName from "../../atoms/LayoutCell/LayoutCell.teamName"
import Score from "../../atoms/LayoutCell/LayoutCell.score"
import MatchStatus from "../../atoms/LayoutCell/LayoutCell.status"


type Props = {
    match: Match
}


export default function ContentPanelFinal(props: Props) {
    const match = props.match

    return (
        <div className={styles.contentPanel}>
            <TeamName teamName={match.awayTeam.name} />
            <Score 
                scoreData={[match.awayScore, match.homeScore]} 
                MatchStatus={<MatchStatus status={match.status === 'live'} />} />
            <TeamName teamName={match.homeTeam.name} />
        </div>
    )
}