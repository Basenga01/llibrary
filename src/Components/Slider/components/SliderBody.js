import styles from "./SliderBody.module.css"
import cn from "classnames";
const text1="В библиотеке располагается музей-мемориал Чеченской войны и Героя Российской Федерации Геннадия Николаевича Трошева"
const text2="В библиотеке располагается раздел с национальной литературой Кубани"
const text3="В библиотеке постоянно появляются новые книги и бестcеллеры мировой и российской литературы"
const text4="Общее количество книг в библиотеке 527 книги и их количество постоянно растёт"


export const SliderBody = ({props}) => {
    const text=[text1, text2, text3, text4]
    const {count} = props
    console.log(count, props)
    return(

        <div className={cn(styles.SliderBody, {
                [styles.Slider1]:count===0,
                [styles.Slider2]:count===1,
                [styles.Slider3]:count===2,
                [styles.Slider4]:count===3
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