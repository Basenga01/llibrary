import {Card} from "../../Components/Card/Card";
import styles from "./Catalog.module.css"
import idiot from "../../img/Idiot.webp"
import dochka from "../../img/dochka.jpeg"
import vechera from  "../../img/vechera.jpg"
import dusha from "../../img/dusha.jpg"
import revizor from "../../img/revizor.jpg"
import taras from "../../img/taras.jpg"
import mir from "../../img/mir.jpg"
import dubrovski from "../../img/dub.jpg"
import onegin from  "../../img/onegin.jpg"
import utro from "../../img/utro.jpg"
import smotritel from "../../img/smotritel.jpg"
import shinel from "../../img/shinel.jpg"
import carevna from "../../img/carevna.jpeg"
import nakazanie from "../../img/nakazanie.jpg"

import doctor from "../../img/doctor.jpg"
import medved from "../../img/medved.jpg"
import chinovnik from "../../img/chinovnik.jpg"
import hamelion from "../../img/hamelion.jpg"
import geroi from "../../img/geroi.jpg"
import {useState} from "react";
import {useEffect} from "react";
import axios from "axios";

export const Catalog =()=> {
        let [books, setBooks] = useState([])
        useEffect(() => {
            getBooks()
        }, [])
        let getBooks = async () => {

            let response = await fetch('https://apibook.alesiaissa.com/api/books/')
            let data = await response.json()
            setBooks(data)
        }
        const [value, setValue] = useState()
    console.log(books)
    return <div className={styles.CatalogMain}>
        <div className={styles.SearchContainer}>
            <input className={styles.Search} type={"text"} value={value} onChange={(event)=>setValue(event.target.value)}/>
        </div>
    <div className={styles.Catalog}> {books.filter((el)=>{
        if (value) {
            return el.name.toLowerCase().includes(value.toLowerCase()) || el.author.toLowerCase().includes(value.toLowerCase()) || el.genre  .toLowerCase().includes(value.toLowerCase())
        }
        else {
            return true
        }
    }).map((book)=><Card key={book.id} props={{book}}/>)}</div>

    </div>
}