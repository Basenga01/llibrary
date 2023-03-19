import styles from "./Video.module.css"
import YouTube from "react-youtube";
export const Video =()=> {
    const src = "https://youtu.be/Ixi0sUpLVRc"
    return <div className={styles.Video}>
    <YouTube videoId={"Ixi0sUpLVRc"}/>
    </div>
}
