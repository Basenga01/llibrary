import {useNavigate, useParams} from "react-router-dom";
import {createContext, useContext, useEffect, useState} from "react";
import {CardContext} from "../../Provaider/CardProvaider/CardProvaider";
import styles from "./CardInfo.module.css";
import {Separate} from "../Separate/Separate";
export const CardInfo= () => {
    const {card, setCard} = useContext(CardContext)
    let {cardId} = useParams();
    const navigate=useNavigate();

    useEffect(()=> {
        return (()=> {setCard(null)})
    },[])

    return <><Separate/>
        <div className={styles.CardInfo}>

            <div className={styles.CardInfoTop}>
                <div><img className={styles.CardBook} src={card.src}/></div>
                <div>
                    <ul className={styles.Opisanie}>
                        <li className={styles.Name}>{card.name}</li>
                        <li className={styles.Author}>{card.author}</li>
                        <li className={styles.Genre}>{card.genre}</li>
                        <li className={styles.Str}>{card.str}</li>
                    </ul>
                </div>
            </div>
            <div className={styles.CardInfoDown}>
                {card.option}
            </div>

        </div>
    </>


}

