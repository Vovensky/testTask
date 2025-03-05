import { Match } from "../../../types/models"

import MatchStatus from "../../atoms/LayoutCell/LayoutCell.status"
import TeamName from "../../atoms/LayoutCell/LayoutCell.teamName"
import Score from "../../atoms/LayoutCell/LayoutCell.score"
import styles from "./contentPanel.module.css"

type Props = {
    match: Match
}

export default function ContentPanelTest(props: Props) {

    const match = props.match

    return (
        <div className={styles.contentPanel}>
            <div className={styles.contentPanel__commonInfo}>
                <TeamName teamName={match.awayTeam.name} />
                <Score 
                    scoreData={[match.awayScore, match.homeScore]} 
                    MatchStatus={<MatchStatus status={match.status === 'live'} />} />
                <TeamName teamName={match.homeTeam.name} />
            </div>
        </div>
    )
}