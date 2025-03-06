import { useEffect, useState, createContext } from 'react'
import { Header } from '@organisms/header/Header'
import { MainLayout } from '@organisms/main/MainLayout'
import ContentPanelTest from '@molecules/contentPanel/ContentPanel.firstTT'
import ContentPanelFinal from '@molecules/contentPanel/contentPanel.secondTT'
import { MatchesData } from './types/models'
import { fetchData } from './utils/fetchData';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { setFilter  } from './utils/setFilter'

export const ContextProvider = createContext(null)

export const App = () => {

    const [matches, setMatches] = useState<MatchesData>({ok: false, once: true})
    const [filter, setAppFilter] = useState({key: 'All', value: "Все"})

    const wrappedFetchData = async (data: MatchesData | null = matches) => {
        await fetchData(data, setMatches)
    }
    
    const wrappedSetFilter = (value: string) => {
        setFilter(value, setAppFilter)
    }
    
    useEffect(() => {
        if(matches.once) {
            wrappedFetchData(null)
        }

        let newSocket = new WebSocket(`${process.env.SOCKET_URL}`)

        newSocket.onopen = () => {
            console.log('Connected');
          };

        newSocket.onmessage = (event) => {
            const data: MatchesData = JSON.parse(event.data)
            setMatches({ok: true, data: data.data})
          };
      
        newSocket.onclose = () => {
            console.log('Disconnect');
          };
      
        newSocket.onerror = (error) => {
            setMatches({ok: true, message: 'Something go wrong', data: []})
            console.error('WebSocket error:', error);
          };

        return () => {
            newSocket.close();
          };

        }, [])

    return (
        <ContextProvider.Provider value={{matches, filter, wrappedFetchData, wrappedSetFilter}}>
                <Header />
                <Router>
                    <Routes>
                        <Route path='/' element={<MainLayout matches={matches} Component={ContentPanelTest}/>} />
                        <Route path='/testtask-1' element={<MainLayout matches={matches} Component={ContentPanelTest} />} />
                        <Route path='/testtask-2' element={<MainLayout matches={matches} Component={ContentPanelFinal} />} />
                    </Routes>
                </Router>
        </ContextProvider.Provider>

    )
};
