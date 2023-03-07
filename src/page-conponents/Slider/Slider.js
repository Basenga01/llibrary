import styles from "./slider.module.css"
export const Slider =()=> {
    return <div className={styles.Navigation}>
        <div className={styles.Button}>
            <button className={styles.Strelka1}></button>
            <button className={styles.Strelka2}></button>
        </div>
    </div>
}
