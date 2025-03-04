type Ok = boolean | null

type Data = Match[] | null 

export type MatchesData = {
    data?: Data,
    ok: Ok,
    message?: string,
    once?: boolean,
}

export type Match = {
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


export type Player = {
    kills: number,
    username: string,
}

export type Callback = {
    updateDataFunc: () => void
}