import {useNavigate, useParams} from "react-router-dom";
import {createContext, useContext, useEffect, useState} from "react";
import {CardContext} from "../../Provaider/CardProvaider/CardProvaider";
import styles from "./CardInfo.module.css";
export const CardInfo= () => {
    const {card, setCard} = useContext(CardContext)
    let {cardId} = useParams();
    const navigate=useNavigate();

    useEffect(()=> {
        return (()=> {setCard(null)})
    },[])

    return <div className={styles.CardInfo}>

        <div className={styles.CardInfoTop}>
            <div><img className={styles.CardBook} src={card.src}/></div>
            <div>
                <ul>
                    <li>{card.name}</li>
                    <li>{card.author}</li>
                    <li>{card.genre}</li>
                    <li>{card.str}</li>
                </ul>
            </div>
        </div>
        <div className={styles.CardInfoDown}>
            1231231231312312
        </div>

    </div>
}

