import styles from './UserAvatar.module.css'

type Props = {
    frame: string,
    avatar: string
}

export default function UserAvatar(props: Props) {

    const { frame, avatar } = props

    return (
        <>
            <img src={frame} className={styles.imageFrame} />
            <img src={avatar} className={styles.info__image} />
        </>
    )

}