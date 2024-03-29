import styles from "./slider.module.css"
import cn from "classnames";
import {SliderBody} from "./components/SliderBody";
import {useState} from "react";
import arrow1 from  "./components/img/Arrow 8.png";
import arrow2 from  "./components/img/Arrow 9.png";

export const Slider =()=> {
    const [count, setCount]=useState(0)
    console.log(count)

    const clickRight=()=> {
        if (count === 3){
            setCount(0)
        }
        else{
            setCount(prevState => prevState+1)
        }
    }
    const clickLeft=()=> {
        if (count === 0){
            setCount(3)
        }
        else{
            setCount(prevState => prevState-1)
        }
    }

    return <div className={styles.Slider}>
        <SliderBody props={{count}}/>
        <div className={styles.ButtonContainer}>
            <button onClick={clickLeft}  className={cn(styles.button, styles.buttonLeft)}><img src={arrow1}/></button>
            <button onClick={clickRight} className={cn(styles.button, styles.buttonRight)}><img src={arrow2}/></button>
        </div>

    </div>
}
