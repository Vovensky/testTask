import styles from './css/app.module.css'
import { useEffect, useState } from 'react'
import { Header } from './components/molecules/header/header'
import { MainLayout } from './components/molecules/main/MainLayout'


export const App = () => {
    return (
        <>
           <Header />
           <MainLayout />
            {/* <main >
                {
                    matches.data.map(element => {
                        return (
                            <div>
                                {element.awayScore}
                            </div>
                        )
                    })
                }
            </main> */}
        </>
    )
};
