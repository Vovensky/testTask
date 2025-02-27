import styles from './css/app.module.css'
import { useEffect, useState } from 'react'

export const App = () => {
    useEffect(() => {
        console.log(process.env.REACT_APP_BASE_URL)
    }, [])

    return (
        <h1> Test idi nahyi </h1>
    )
};
