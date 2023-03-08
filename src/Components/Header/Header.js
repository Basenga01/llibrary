import styles from './header.module.css'
import {Link} from "react-router-dom";
import {CATALOG, MAIN} from "../../Routes/Paths";

export const Header = () => {
    return <div className={styles.Header}>
        <div className={styles.Navigation}>
            <Link to={MAIN}>
                <div>Главная</div>
            </Link>
            <div>История</div>
            <div>Видео-гид</div>
            <div>Сотрудники</div>
            <Link to={CATALOG}>
                <div>Каталог</div>
            </Link>

        </div>

        <div className={styles.Logo}>

        </div>
    </div>
}
