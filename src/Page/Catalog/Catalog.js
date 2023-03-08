import {Card} from "../../Components/Card/Card";
import styles from "./Catalog.module.css"
export const Catalog =()=> {
    const books = [
        {id:1, name:"Книгв1"},
        {id:2, name:"Книгв2"},
        {id:3, name:"Книгв3"},
        {id:4, name:"Книгв4"},
        {id:5, name:"Книгв5"}
    ]
    return <div className={styles.Catalog}> {books.map((book)=><Card key={books.id} props={{book}}/>)} </div>
}