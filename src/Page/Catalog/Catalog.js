import {Card} from "../../Components/Card/Card";
import styles from "./Catalog.module.css"
import img1 from "../../img/Idiot.webp"
export const Catalog =()=> {
    const books = [
        {id:1, name:"Книгв1", src:img1},
        {id:2, name:"Книгв2", src:img1},
        {id:3, name:"Книгв3", src:img1},
        {id:4, name:"Книгв4", src:img1},
        {id:5, name:"Книгв5", src:img1}
    ]
    return <div className={styles.Catalog}> {books.map((book)=><Card key={books.id} props={{book}}/>)} </div>
}