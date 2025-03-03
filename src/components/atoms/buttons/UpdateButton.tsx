import UpdateIcon from '../../assets/UpdateIcon/UpdateIcon'
import styles from './UpdateButton.module.css'

export default function UpdateButton() {
    return (
        <div className={styles.buttonWrapper}>
            <button type='button' className={styles.updateButton}>
                <span className={styles.updateButton_text}>Обновить</span>
                <div className={styles.updateButton_icon}>
                    <UpdateIcon opacity={0.5} />
                </div>
            </button>
        </div>
    )
}