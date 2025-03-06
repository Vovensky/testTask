import styles from './LayoutCell.module.css'
import avatar from '../../../../assets/images/tarantino.jpg'
import frame from '../../../../assets/images/image.png'

type Props = {
    playerName: string
}

export default function PlayerInfo(props: Props) {

    const playerName = props.playerName;

    return (
        <div className={styles.infoContainer}>
            <img src={frame} className={styles.imageFrame} />
            <img src={avatar} className={styles.info__image}/>
            <span className={styles.info__playerName}>{playerName}</span>
        </div>
    )
}