import UpdateIcon from '@assets/UpdateIcon/UpdateIcon'
import styles from './UpdateButton.module.css'
import { ContextProvider } from '@App/App'
import { useContext } from 'react'


export default function UpdateButton() {

    const updateData = useContext(ContextProvider).wrappedFetchData

    return (
        <div className={styles.buttonWrapper} onClick={() => updateData()}>
            <button type='button' className={styles.updateButton}>
                <span className={styles.updateButton_text}>Обновить</span>
                <div className={styles.updateButton_icon}>
                    <UpdateIcon />
                </div>
            </button>
        </div>
    )
}