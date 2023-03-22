import styles from "./Card.module.css"
import {CATALOG} from "../../Routes/Paths";
import {Link} from "react-router-dom";
export const Card=({props})=>{
    const {id, name} = props.book
    return <Link to={`${CATALOG}/${id}`}>
        <div className={styles.Card}>{name} </div>
    </Link>
}