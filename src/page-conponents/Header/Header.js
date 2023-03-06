import styles from './header.module.css'
export const Header =()=> {
    return <div className={styles.Header}>
        <div className={styles.Navigation}>
            <div>Описание</div>
            <div>История</div>
            <div>Видео-гид</div>
            <div>Сотрудники</div>
        </div>
        <button>
            Каталог
        </button>
        <div className={styles.Logo}>

        </div>
    </div>
}
