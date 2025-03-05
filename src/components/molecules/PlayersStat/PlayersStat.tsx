import { Player, Match } from "../../../types/models"
import styles from './PlayersStat.module.css'
import PlayerInfo from "../../atoms/LayoutCell/LayoutCell.PlayerInfo"
import AdditionalInfo from "../../atoms/LayoutCell/LayoutCell.additionalInfo"

type Props = {
    playersData: {
        homePlayers: Player[],
        awayPlayers: Player[],
    }
    additionalData: Match
}


export default function PlayersStat(props: Props) {

    const {homePlayers, awayPlayers} = props.playersData
    const additionalData = props.additionalData


    const homePlayersStat = 
        homePlayers.map(
            (element) => {
                return (
                    <div className={styles.statElement}>
                        <PlayerInfo playerName={element.username} />
                        <AdditionalInfo label="Убийства" value={element.kills} />
                    </div>
                )
            }
        )

    const awayPlayersStat =
            awayPlayers.map(
                (element) => {
                    return (
                        <div className={styles.statElement}>
                            <PlayerInfo playerName={element.username} />
                            <AdditionalInfo label="Убийств" value={element.kills} />
                        </div>
                    )
                }
            )
    
    return (
        <>
            <div className={styles.teamCompound}>
                <div className={styles.statContainer}>
                    {homePlayersStat}
                </div>
                <div className={styles.statContainer}>
                    <AdditionalInfo label='Points:' value={additionalData.homeTeam.points} />
                    <AdditionalInfo label='Всего убийств:' value={additionalData.homeTeam.total_kills} />
                    <AdditionalInfo label='Место:' value={additionalData.homeTeam.place} />
                </div>
            </div>
            <div className={styles.teamCompound}>
                <div className={styles.statContainer}>
                    {awayPlayersStat}
                </div>
                <div className={styles.statContainer}>
                    <AdditionalInfo label='Points:' value={additionalData.awayTeam.points} />
                    <AdditionalInfo label='Всего убийств:' value={additionalData.awayTeam.total_kills} />
                    <AdditionalInfo label='Место:' value={additionalData.awayTeam.place} />
                </div>
            </div>
        </>
    )
} 