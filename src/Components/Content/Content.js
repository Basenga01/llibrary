import styles from "./Content.module.css"
import {MAIN} from "../../Routes/Paths";
export const Content =()=> {
    return <div className={styles.Content} id={`history`}>
        <div>Библиотека школы №98 была основана в 2012 года вместе с самой школой для хранения учебников. Сейчас это гордость учебного заведения.</div>
        <div>Сейчас на территории библиотеки действует мемориал Чеченской войны и Героя Российской Федерации Геннадия Николаевича Трошева в честь которого названа школа.</div>
    </div>
}
