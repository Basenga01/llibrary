import styles from './header.module.css'
import {Link, useLocation, useNavigate} from "react-router-dom";
import {CATALOG, MAIN} from "../../Routes/Paths";
import {useEffect, useRef} from "react";

export const Header = () => {

    const location = useLocation()
    const navigate = useNavigate()


    console.log(location.pathname)
    return <div className={styles.Header}>
        <div className={styles.Navigation}>
            <Link to={MAIN}>
                <div>Главная</div>
            </Link>
            <Link to={`${MAIN}#history`}>
                <div>История</div>
            </Link>
            <Link to={`${MAIN}#video`}>
            <div>Видео-гид</div>
            </Link>
            <Link to={`${MAIN}#personal`}>
            <div>Сотрудники</div>
            </Link>
            <Link to={CATALOG}>
                <div>Каталог</div>
            </Link>
            {location.pathname !== MAIN && <div onClick={()=>navigate(-1)}>
                Назад
            </div>}

        </div>
    </div>
}
