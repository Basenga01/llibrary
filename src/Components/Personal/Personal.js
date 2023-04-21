import styles from ".//Personal.module.css"
import {Separate} from "../Separate/Separate";

export const Personal = () => {
    return <div className={styles.PersonalContainer}>

        <div className={styles.PersonalLeft}>

            <div className={styles.PersonalIMG1}></div>

            <Separate/>

            <div className={styles.PersonalTextBackground}>
                <p className={styles.PersonalLeftTxt1}>Догадайло Нина Михайловна</p>
                <p className={styles.PersonalLeftTxt2}>Высшее образование получила в Краснодарском государственном институте культуры. После окончания института работала в Национальной библиотеке Республики Адыгея, затем в Адыгейской республиканской специальной библиотеке для слепых, а с 2012 года, со дня открытия МБОУ СОШ № 98, с огромным удовольствием тружусь в школьной библиотеке.</p>
                <p className={styles.PersonalLeftTxt3}>Машина времени есть у каждого из нас:
                    то, что переносит в прошлое – воспоминания,
                    то, что уносит в будущее – мечты
                </p>
            </div>
        </div>

        <div className={styles.PersonaRight}>

            <div className={styles.PersonalIMG2}></div>

            <Separate/>

            <div className={styles.PersonalTextBackground}>
                <p className={styles.PersonalRightTxt1}>Левада Светлана
                   <br/> Петровна</p>
                <p className={styles.PersonalRightTxt2}>Закончила Краснодарский государственный университет культуры и искусств по специальности"Библиотекарь-библиограф.Педагог-руководитель чтения детей и юношества по специальности "Библиотековедение и библиография. По совместительству я работаю педагогом дополнительного образования. Руковожу Театром книги"Изумрудный город"</p>
                <p className={styles.PersonalRightTxt3}>Книга - учитель,
                    Книга-наставник,
                    Книга надёжный товарищ и друг.
                    Ум, как ручей, высыхает и старится,
                    Если ты выпустишь книгу из рук...
                </p>
            </div>
        </div>
    </div>
}
