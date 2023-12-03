import styles from "./Video.module.css"
import YouTube from "react-youtube";
export const Video =()=> {
    return <div className={styles.Video} id={`video`}>

    <YouTube videoId={"r-qolv2Kba4"}/>
    </div>
}
