import { SetStateAction } from "react"
import { MatchesData } from "../types/models"

async function fetchData(data: MatchesData, callback: SetStateAction<any>) {
    console.log(`data`, data)
    try {
        const data = await fetch(`${process.env.BASE_URL}/fronttemp`)
        if(!data.ok) throw Error('Произошла неизвестная ошибка, попробуйте позже')

            
        const  cleanData = await data.json()
        sessionStorage.setItem('matchesCache', JSON.stringify(cleanData))

        callback({ok: cleanData.ok, data: cleanData.data.matches})


    } catch(err: any) {
        if(sessionStorage.getItem('matchesCache')) {
            callback({...data, message: "Ошибка сети"})
            return
        }
        callback({ok: false, message: `Упс! ${err.message}`})
    }
}

export {fetchData}