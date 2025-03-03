import { useEffect, useState, createContext } from 'react'
import { Header } from './components/molecules/header/header'
import { MainLayout } from './components/molecules/main/MainLayout'
import { MatchesData } from './types/models'
import { fetchData } from './utils/fetchData';

export const ContextProvider = createContext(null)

// const mocks = [
//     {
//         awayScore: 9,
//         awayTeam: {
//             name: "Cool Team 1",
//             place: 9,
//             players: [
//                 {
//                     kills: 2,
//                     username: "Speel"
//                 },
//                 {
//                     kills: 3,
//                     username: 'Looser'
//                 },
//                 {
//                     kills: 1,
//                     username: '4 dolbaeba v time',
//                 }
//             ], 
//             points: 26,
//             total_kills: 13,
//         },
//         homeScore: 10,
//         homeTeam: {
//             name: 'Cool Team 2',
//             place: 8,
//             players: [
//                 {
//                     kills: 2,
//                     username: "Speel"
//                 },
//                 {
//                     kills: 3,
//                     username: 'Looser'
//                 },
//                 {
//                     kills: 1,
//                     username: '4 dolbaeba v time',
//                 }
//             ]
//         },
//                 status: 'Finished',
//         title: 'Cool match 1'
//     }
// ]

export const App = () => {

    const [matches, setMatches] = useState<MatchesData>({ok: false, once: true})

    const wrappedFetchData = async (data: MatchesData | null = matches) => { //мемоизация не использована намеренно, т.к. при обновлении стэйта все остальные компоненты ререндерятся
        await fetchData(data, setMatches)
    }                                   
    
    useEffect(() => {
        if(matches.once) {
            wrappedFetchData(null)
        }
        }, [])

    return (
        <ContextProvider.Provider value={{matches, wrappedFetchData}}>
           <Header />
           <MainLayout matches={matches} />
        </ContextProvider.Provider>
    )
};
