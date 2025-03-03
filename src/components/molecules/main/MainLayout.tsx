import Score from '../../atoms/LayoutCell/LayoutCell.score'
import TeamName from '../../atoms/LayoutCell/LayoutCell.teamName'
import MatchStatus from '../../atoms/LayoutCell/LayoutCell.status'
import { MatchesData } from '../../../types/models'
import styles from './MainLayout.module.css'

type Props = {
    matches: MatchesData,
}

export const MainLayout = (props: Props) => {

    const matches = props.matches
    
        if(!matches.ok) {
            return (
                <div>{ matches.message || `Данные пока отсутствуют, но скоро появятся`}</div>
            )
        }
    return (
        <div className={styles.mainLayout}>
            {
                matches.data.map(element => {
                    return (
                        <div className={styles.mainLayout__Content}>
                            <TeamName teamName={element.awayTeam.name} />
                            <Score 
                                scoreData={[element.awayScore, element.homeScore]} 
                                MatchStatus={<MatchStatus status={element.status === 'live'} />} />
                            <TeamName teamName={element.homeTeam.name} />
                        </div>
                        )
                })
            }
        </div>
    )
}