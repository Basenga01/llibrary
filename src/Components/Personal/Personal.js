import styles from ".//Personal.module.css"
export const Personal =()=> {
    return <div className={styles.PersonalContainer}>
        <div className={styles.PersonalLeft}>
            <div>
                <div className={styles.PersonalIMG1}></div>
            </div>

            <div className={styles.PersonalTextBackground}>
                <p className={styles.PersonalRightTxt1}>Иванова Лидия Георгиевна</p>
                <p className={styles.PersonalRightTxt2}>Главная по главному, книжкам там и так далее. очень важный сотрудник без которого ничего не будет. сеньор в сфере литературы. и другие эпитеты и комплименты</p>
            </div>
        </div>
        <div className={styles.PersonaRight}></div>
    </div>
}
