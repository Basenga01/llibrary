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
export const Catalog =()=> {
    const books = [
        {id:1, name:"Идиот. Фёдор Михайлович Достоевский (комедия)", src:idiot},
        {id:2, name:"Капитанская дочка. Александр Сергеевич Пушкин (драма)", src:dochka},
        {id:3, name:"Вечера на хуторе близ диканьки. Николай Васильевич Гоголь (комедия)", src:vechera},
        {id:4, name:"Мёртвые души. Николай Васильевич Гоголь (комедия)", src:dusha},
        {id:5, name:"Тарас Бульба. Николай Васильевич Гоголь (повесть)", src:taras},
        {id:6, name:"Война и мир. Лев Николаевич Толстой (роман)", src:mir},
        {id:7, name:"Дубровский. Александр Сергеевич Пушкин (Роман)", src:dubrovski},
        {id:8, name:"Евгений Онегин. Александр Сергеевич Пушкин (роман в стихах)", src:onegin},
        {id:9, name:"Зимнее утро. Александр Сергеевич Пушкин (стих)", src:utro},
        {id:10, name:"Станционный Смотритель. Александр Пушкин (повесть)", src:smotritel},
        {id:11, name:"Шинель. Николай Васильевич Гоголь (повесть)", src:shinel},
        {id:12, name:"Сказка о мёртвой царевне и о семи богатырях. Александр Пушкин (сказка)", src:carevna},
        {id:13, name:"Преступление и наказание. Фёдор Михайлович Достоевский (роман)", src:nakazanie},
        {id:14, name:"Бесы. Фёдор Михайлович Достоевский (роман)", src:besi},
        {id:15, name:"Ревизор. Николай Васильевич Гоголь (комедия)", src:revizor},
        {id:16, name:"Чудесный доктор. Александр Иванович Куприн (рассказ)", src:doctor},
        {id:17, name:"Медведь. Антон Павлович Чехов (пьеса, комедия)", src:medved},
        {id:18, name:"Смерть чиновника. Антон Павлович Чехов (рассказ)", src:chinovnik},
        {id:19, name:"Хамелуон. Антон Павлович Чехов (рассказ)", src:hamelion},
        {id:20, name:"Герой нашего времени. Михаилом Юрьевичем Лермонтовым (роман)", src:geroi}

    ]
    return <div className={styles.Catalog}> {books.map((book)=><Card key={books.id} props={{book}}/>)} </div>
}