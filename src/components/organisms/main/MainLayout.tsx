import { MatchesData } from '../../../types/models'
import styles from './MainLayout.module.css'
import React from 'react'

type Props = {
    Component: React.ElementType,
    matches: MatchesData
}

export const MainLayout = (props: Props) => {

    const matches = props.matches
    const Component = props.Component
    
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
                        <Component match={element} />
                        )
                })
            }
        </div>
    )
}