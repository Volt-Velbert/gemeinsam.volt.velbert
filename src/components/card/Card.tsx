import React from "react";
import styles from "./Card.module.css"

interface CardProps {
    children: React.ReactNode
}

const Card: React.FC<CardProps> = (props) => {

    const {children} = props

    return <div className={styles.card}>
        {children}
    </div>
}

export default Card;