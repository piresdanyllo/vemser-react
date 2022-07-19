import styles from "./Card.module.css"
import cogumelo from "../../../img/mario_PNG75.png"

const Card = (props) => {
    return(
        <div className={styles.card}>
            <img src={cogumelo} alt="" className={styles.imgCard}/>
            <p>{props.value}</p>
        </div>
    )
}

export default Card