import styles from './header.module.css'
import {Link, useLocation, useNavigate} from "react-router-dom";
import {CATALOG, MAIN} from "../../Routes/Paths";

export const Header = () => {
    const navigate=useNavigate();
    const location = useLocation()
    console.log(location.pathname)
    return <div className={styles.Header}>
        <div className={styles.Navigation}>
            <Link to={MAIN}>
                <div>Главная</div>
            </Link>
            <Link to={MAIN}>
                <div>История</div>
            </Link>
            <Link to={MAIN}>
            <div>Видео-гид</div>
            </Link>
            <Link to={MAIN}>
            <div>Сотрудники</div>
            </Link>
            <Link to={CATALOG}>
                <div>Каталог</div>
            </Link>
            {location.pathname !== MAIN && <div onClick={()=>navigate(-1)}>
                Назад
            </div>}

        </div>

        {/*<div className={styles.Logo}>*/}

        {/*</div>*/}
    </div>
}
