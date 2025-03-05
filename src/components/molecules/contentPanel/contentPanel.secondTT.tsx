import { Match } from "../../../types/models"
import styles from './contentPanel.module.css'
import TeamName from "../../atoms/LayoutCell/LayoutCell.teamName"
import Score from "../../atoms/LayoutCell/LayoutCell.score"
import MatchStatus from "../../atoms/LayoutCell/LayoutCell.status"
import PlayerStat from "../PlayersStat/PlayersStat"


type Props = {
    match: Match
}


export default function ContentPanelFinal(props: Props) {
    const match = props.match

    const players = {
        homePlayers: match.homeTeam.players,
        awayPlayers: match.awayTeam.players,
    }

    return (
        <div className={styles.contentPanel}>
            <div className={styles.contentPanel__commonInfo}>
                <TeamName teamName={match.awayTeam.name} />
                <Score 
                    scoreData={[match.awayScore, match.homeScore]} 
                    MatchStatus={<MatchStatus status={match.status === 'live'} />} />
                <TeamName teamName={match.homeTeam.name} />
            </div>
            <div className={styles.contentPanel__additionalInfo}>
                <PlayerStat playersData={players} additionalData={props.match} />
            </div>
        </div>
    )
}


// AdditionalInfo {
//     TeamCompund {
//         userName kills
//         userName kills
//         userName kills
//     }
//     OtherInfo{
//         Points Number
//         Place Number
//         TeamKills Number
//     }
// }

