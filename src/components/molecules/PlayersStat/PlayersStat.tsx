import { Player } from "../../../types/models"
import styles from './PlayersStat.module.css'
import PlayerInfo from "../../atoms/LayoutCell/LayoutCell.PlayerInfo"
import AdditionalInfo from "../../atoms/LayoutCell/LayoutCell.additionalInfo"

type Props = {
    playersData: {
        homePlayers: Player[],
        awayPlayers: Player[],
    }
}


export default function PlayersStat(props: Props) {

    const {homePlayers, awayPlayers} = props.playersData


    const homePlayersStat = 
        homePlayers.map(
            (element) => {
                return (
                    <div className={styles.statElement}>
                        <PlayerInfo playerName={element.username} />
                        <AdditionalInfo label="Убийства" killCount={element.kills} />
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
                            <AdditionalInfo label="Убийств" killCount={element.kills} />
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
            </div>
            <div className={styles.teamCompound}>
                <div className={styles.statContainer}>
                    {awayPlayersStat}
                </div>
            </div>
        </>
    )
} 