import { useEffect, useState, createContext } from 'react'
import { Header } from './components/organisms/header/header'
import { MainLayout } from './components/organisms/main/MainLayout'
import ContentPanelTest from './components/molecules/contentPanel/ContentPanel.firstTT'
import { MatchesData } from './types/models'
import { fetchData } from './utils/fetchData';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

export const ContextProvider = createContext(null)


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
            <Router>
                <Routes>
                    <Route path='/' element={<MainLayout matches={matches} Component={ContentPanelTest}/>} />
                    <Route path='/testtask-1' element={<MainLayout matches={matches} Component={ContentPanelTest} />} />
                </Routes>
            </Router>
        </ContextProvider.Provider>
    )
};
