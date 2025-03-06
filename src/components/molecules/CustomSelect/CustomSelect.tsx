import { useContext } from "react"
import { ContextProvider } from "../../../App"
import styles from './CustomSelect.module.css'
import ArrowBottom from "../../assets/ArrowBottomIcon/ArrowBottom"


export default function CustomSelect() {
    const {filter, wrappedSetFilter}  = useContext(ContextProvider)

    const clickHandler = (event: React.MouseEvent<HTMLUListElement>) => {
        const target  = event.target as HTMLLIElement
        wrappedSetFilter(target.dataset.value)
    }

    return (
        <div className={styles.customSelect}>
            <div className={styles.customSelect__header}>
                <div className={styles.customSelect__item}>{filter.value}</div>
                <div className={styles.iconContainer}>
                    <ArrowBottom />
                </div>
            </div>

            <ul 
                className={styles.customSelect__body}
                onClick={clickHandler}>
                <li data-value='All' className={styles.customSelect__item}>Все</li>
                <li data-value='Finished' className={styles.customSelect__item}> Законченные </li>
                <li data-value='Ongoing' className={styles.customSelect__item}> Идущие </li>
                <li data-value='Scheduled' className={styles.customSelect__item}> Запланирован </li>
            </ul>
        </div>

    )
}