import {Content} from "../../Components/Content/Content";
import {Slider} from "../../Components/Slider/Slider";
import {Video} from "../../Components/Video/Video";
import {Personal} from "../../Components/Personal/Personal";
import styles from "./Main.module.css"


export const Main = () => {
    return <div className={styles.Main}>
        <Slider/>
        <Content/>
        <Video/>
        <Personal/>
    </div>

}