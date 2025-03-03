import styles from './LayoutCell.module.css'

type Props = {
    teamName: string
}

export default function TeamName(props: Props) {

    const teamName = props.teamName

    return (
        <div className={styles.mainLayout__Cell}>
            { teamName }
        </div>
    )
}