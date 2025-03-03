import styles from './updatePanel.module.css'
import UpdateButton from '../../atoms/buttons/UpdateButton'
import ErrorMessage from '../../atoms/ErrorMessage/ErrorMessage'

export default function UpdatePanel() {
    return (
        <div className={styles.updatePanel}>
            <ErrorMessage />
            <UpdateButton />
        </div>

    )
}