import styles from './ErrorMessage.module.css'
import ErrorIcon from '@assets/ErrorIcon/ErrorIcon'
import { useContext } from 'react'
import { ContextProvider } from '@App/App'

export default function ErrorMessage() {

    const message = useContext(ContextProvider).matches.message

    if(message) {
        return (
            <div className={styles.errorMessage}>
                <ErrorIcon />
                <span className={styles.errorMessage_text}>Ошибка: не удалось загрузить информацию</span>
            </div>
        )
    }
    return null

}