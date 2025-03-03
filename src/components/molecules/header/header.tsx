import { Label } from "../../atoms/label/Label"
import UpdatePanel from "../updatePanel/updatePanel"
import styles from './header.module.css'

export const Header = () => {
    return (
        <header className={styles.header}>
            <Label />
            <UpdatePanel />
        </header>
    )
}