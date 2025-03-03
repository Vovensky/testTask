import styles from './ErrorMessage.module.css'
import ErrorIcon from '../../assets/ErrorIcon/ErrorIcon'

export default function ErrorMessage() {
    return (
        <div className={styles.errorMessage}>
            <ErrorIcon />
            <span className={styles.errorMessage_text}>Ошибка: не удалось загрузить информацию</span>
        </div>
    )
}