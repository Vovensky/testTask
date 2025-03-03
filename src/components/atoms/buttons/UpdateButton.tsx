import UpdateIcon from '../../assets/UpdateIcon/UpdateIcon'
import styles from './UpdateButton.module.css'
import { ContextProvider } from '../../../App'
import { useContext } from 'react'


export default function UpdateButton() {

    const updateData = useContext(ContextProvider).wrappedFetchData

    return (
        <div className={styles.buttonWrapper} onClick={() => updateData()}>
            <button type='button' className={styles.updateButton}>
                <span className={styles.updateButton_text}>Обновить</span>
                <div className={styles.updateButton_icon}>
                    <UpdateIcon opacity={0.5} />
                </div>
            </button>
        </div>
    )
}