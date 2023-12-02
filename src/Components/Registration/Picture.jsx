import React from "react";
import picture from '../../assets/picture.png'
import styles from './Picture.module.css'

const Picture = () => {
    return (
        <img src={picture} className={styles.picture} />
    )
}

export default Picture