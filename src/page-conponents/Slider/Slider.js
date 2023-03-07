import styles from "./slider.module.css"
export const Slider =()=> {
    return <div className={styles.Navigation}>
        <div className={styles.Button}>
            <button className={styles.Strelka1}></button>
            <button className={styles.Strelka2}></button>
        </div>
        <div className={styles.Txt_cont}>
            <div className={styles.Txt}>
                В библиотеке находится 259 книг разных авторов и жанров
            </div>
        </div>
    </div>
}
