import styles from './LayoutCell.module.css'
import UserAvatar from '../UserAvatar/UserAvatar'
import frame from '@media/images/image.png'
import avatar from '@media/images/tarantino.jpg'

type Props = {
    playerName: string
}

export default function PlayerInfo(props: Props) {

    const playerName = props.playerName;

    return (
        <div className={styles.infoContainer}>
            <UserAvatar frame={frame} avatar={avatar} />
            <span className={styles.info__playerName}>{playerName}</span>
        </div>
    )
}