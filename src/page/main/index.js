import {Header} from "../../page-conponents/Header/Header";
import {Content} from "../../page-conponents/Content/Content";
import {Slider} from "../../page-conponents/Slider/Slider";
import {Video} from "../../page-conponents/Video/Video";
import {Personal} from "../../page-conponents/Personal/Personal";
import {Footer} from "../../page-conponents/Footer/Footer";
import styles from "./index.module.css"


export const Main = () => {
    return <div className={styles.Main}>
       ПРивет Медвед1
        <Header/>
        <Slider/>
        <Content/>
        <Video/>
        <Personal/>
        <Footer/>
    </div>

}