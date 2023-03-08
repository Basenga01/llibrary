import styles from "./SliderBody.module.css"
import cn from "classnames";
const text1="В библиотеке находится 259 книг разных авторов и жанров"
const text2="В библиотеке находится 258 книг разных авторов и жанров"
const text3="В библиотеке находится 257 книг разных авторов и жанров"

export const SliderBody = ({props}) => {
    const text=[text1, text2, text3]
    const {count} = props
    console.log(count, props)
    return(

        <div className={cn(styles.SliderBody, {
                [styles.Slider1]:count===0,
                [styles.Slider2]:count===1,
                [styles.Slider3]:count===2
        }
        )}>
            <div className={styles.text}>
                {text[count]}
            </div>

            <div className={styles.starContainer}>
                {text.map((el, idx)=><div key={idx} className={cn(styles.star, {[styles.active]:idx===count})}></div>)}
            </div>
        </div>
    )
}