import styles from "./Card.module.css"
import {CATALOG} from "../../Routes/Paths";
import {Link} from "react-router-dom";
import {createContext, useContext, useState} from "react";
import {CardContext} from "../../Provaider/CardProvaider/CardProvaider";
import React, {Component} from "react";
import {BOOKS} from "../../Consts";

export const Card=({props})=>{
    const {card, setCard} = useContext(CardContext)
    const {id, name, author, genre, str, option} = props.book
    return <Link to={`${CATALOG}/${id}`} onClick={()=> setCard(props.book)}>
    <div className={styles.Card}><span className={styles.Description}>{name}{author}{genre}</span><img className={styles.CardBook} src={BOOKS[props.book.src.slice(5, props.book.src.indexOf("."))] || ""}/> </div>
    </Link>
}