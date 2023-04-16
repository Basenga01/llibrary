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
import besi from "../../img/besi.jpg"
import doctor from "../../img/doctor.jpg"
import medved from "../../img/medved.jpg"
import chinovnik from "../../img/chinovnik.jpg"
import hamelion from "../../img/hamelion.jpg"
import geroi from "../../img/geroi.jpg"
import {useState} from "react";

export const Catalog =()=> {
    const books = [
        {id:1, name:"Идиот.", author: "Фёдор Михайлович Достоевский", genre: "(комедия)", src:idiot, str:"Количество страниц:321", option:"12312312312321"},
        {id:2, name:"Капитанская дочка.", author: " Александр Сергеевич Пушкин", genre: " (драма)", src:dochka, str:"Количество страниц:321", option:"12312312312321"},
        {id:3, name:"Вечера на хуторе близ диканьки.", author: " Николай Васильевич Гоголь", genre: " (комедия)", src:vechera, str:"Количество страниц:321", option:"12312312312321"},
        {id:4, name:"Мёртвые души.", author: " Николай Васильевич", genre: " Гоголь (комедия)", src:dusha, str:"Количество страниц:321", option:"12312312312321"},
        {id:5, name:"Тарас Бульба.", author: " Николай Васильевич Гоголь", genre: " (повесть)", src:taras},
        {id:6, name:"Война и мир.", author: " Лев Николаевич Толстой", genre: " (роман)", src:mir},
        {id:7, name:"Дубровский.", author: " Александр Сергеевич Пушкин", genre: " (Роман)", src:dubrovski},
        {id:8, name:"Евгений Онегин.", author: " Александр Сергеевич Пушкин", genre: " (роман в стихах)", src:onegin},
        {id:9, name:"Зимнее утро.", author: " Александр Сергеевич Пушкин", genre: " (стих)", src:utro},
        {id:10, name:"Станционный Смотритель.", author: " Александр Пушкин", genre: " (повесть)", src:smotritel},
        {id:11, name:"Шинель.", author: " Николай Васильевич Гоголь", genre: " (повесть)", src:shinel},
        {id:12, name:"Сказка о мёртвой царевне и о семи богатырях.", author: " Александр Пушкин", genre: " (сказка)", src:carevna},
        {id:13, name:"Преступление и наказание.", author: " Фёдор Михайлович Достоевский", genre: " (роман)", src:nakazanie},
        {id:14, name:"Бесы.", author: " Фёдор Михайлович Достоевский", genre: " (роман)", src:besi},
        {id:15, name:"Ревизор.", author: " Николай Васильевич Гоголь", genre: " (комедия)", src:revizor},
        {id:16, name:"Чудесный доктор.", author: " Александр Иванович Куприн", genre: " (рассказ)", src:doctor},
        {id:17, name:"Медведь.", author: " Антон Павлович Чехов", genre: " (пьеса, комедия)", src:medved},
        {id:18, name:"Смерть чиновника.", author: " Антон Павлович Чехов", genre: " (рассказ)", src:chinovnik},
        {id:19, name:"Хамелуон.", author: " Антон Павлович Чехов", genre: " (рассказ)", src:hamelion},
        {id:20, name:"Герой нашего времени.", author: " Михаилом Юрьевичем Лермонтовым", genre: " (роман)", src:geroi}

    ]
        const [value, setValue] = useState()
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