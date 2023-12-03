import {Content} from "../../Components/Content/Content";
import {Slider} from "../../Components/Slider/Slider";
import {Video} from "../../Components/Video/Video";
import {Personal} from "../../Components/Personal/Personal";
import styles from "./Main.module.css"
import {Separate} from "../../Components/Separate/Separate";
import {MAIN} from "../../Routes/Paths";
import Linktohesh from "../../Components/Linktohesh";


export const Main = () => {
    return <div className={styles.Main}>
        <Slider/>
        <Separate/>
        <Content/>
        <Separate/>
        <Video/>
        <Separate/>
        <Personal/>
        <Linktohesh/>
    </div>

}