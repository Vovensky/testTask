import { useState, useEffect} from 'react'
import Score from '../../atoms/LayoutCell/LayoutCell.score'
import TeamName from '../../atoms/LayoutCell/LayoutCell.teamName'
import MatchStatus from '../../atoms/LayoutCell/LayoutCell.status'
import styles from './MainLayout.module.css'

type Ok = boolean | null

type Data = Match[] | null 

type MatchesData = {
    data?: Data,
    ok: Ok,
    message?: string,
    once?: boolean,
}

type Match = {
    awayScore: number,
    awayTeam: Team,
    homeTeam: Team,
    homeScore: number,
    status: string,
} 

type Team = {
    name: string,
    place: number,
    players: Player[]
}


type Player = {
    kills: number,
    username: string,
}

export const MainLayout = () => {

    const [matches, setMatches] = useState<MatchesData>({ok: false, once: true})
    
    useEffect(() => {
        if(matches.once) {
            (async function () {
                try {
                    const data = await fetch(`${process.env.BASE_URL}/fronttemp`)
                    if(!data.ok) throw Error('Произошла неизвестная ошибка, попробуйте позже')
    
                        
                    const  cleanData = await data.json()
    
                    setMatches({ok: cleanData.ok, data: cleanData.data.matches})
    
                } catch(err: any) {
                    setMatches({ok: false, message: `Упс! ${err.message}`})
                }
                })()
            }
        }, [])
    
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