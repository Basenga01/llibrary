import {Card} from "../../Components/Card/Card";
import styles from "./Catalog.module.css"
import img1 from "../../img/Idiot.webp"
import img2 from "./img.png"
export const Catalog =()=> {
    const books = [
        {id:1, name:"Идиот. Фёдор Достоевский" +
                "(комедия)", src:img1},
        {id:2, name:"Книгв2", src:img2},
        {id:3, name:"Книгв3", src:img1},
        {id:4, name:"Книгв4", src:img2},
        {id:5, name:"Книгв5", src:img1}
    ]
    return <div className={styles.Catalog}> {books.map((book)=><Card key={books.id} props={{book}}/>)} </div>
}