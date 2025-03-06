import { Label } from "@atoms/label/Label"
import UpdatePanel from "@molecules/updatePanel/updatePanel"
import CustomSelect from "@molecules/CustomSelect/CustomSelect"
import styles from './header.module.css'

export const Header = () => {
    return (
        <header className={styles.header}>
            <Label />
            <CustomSelect />
            <UpdatePanel />
        </header>
    )
}

