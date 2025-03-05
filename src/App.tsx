import { useEffect, useState, useCallback, createContext } from 'react'
import { Header } from './components/organisms/header/header'
import { MainLayout } from './components/organisms/main/MainLayout'
import ContentPanelTest from './components/molecules/contentPanel/ContentPanel.firstTT'
import ContentPanelFinal from './components/molecules/contentPanel/contentPanel.secondTT'
import { MatchesData } from './types/models'
import { fetchData } from './utils/fetchData';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

export const ContextProvider = createContext(null)



export const App = () => {

    const [matches, setMatches] = useState<MatchesData>({ok: false, once: true})

    const wrappedFetchData = async (data: MatchesData | null = matches) => {
        await fetchData(data, setMatches)
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
            const data = JSON.parse(event.data)
            setMatches({ok: true, data: data.data})
          };
      
        newSocket.onclose = () => {
            console.log('Disconnect');
          };
      
        newSocket.onerror = (error) => {
            setMatches({ok: true, message: 'Something go wrong'})
            console.error('WebSocket error:', error);
          };

        return () => {
            console.log(`destruction`)
            newSocket.close();
          };

        }, [])

    return (
        <ContextProvider.Provider value={{matches, wrappedFetchData}}>
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
