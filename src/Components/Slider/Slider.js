import styles from "./slider.module.css"
import cn from "classnames";
import {SliderBody} from "./components/SliderBody";
import {useState} from "react";

export const Slider =()=> {
    const [count, setCount]=useState(0)
    console.log(count)

    const clickRight=()=> {
        if (count === 2){
            setCount(0)
        }
        else{
            setCount(prevState => prevState+1)
        }
    }
    const clickLeft=()=> {
        if (count === 0){
            setCount(2)
        }
        else{
            setCount(prevState => prevState-1)
        }
    }

    return <div className={styles.Slider}>
        <SliderBody props={{count}}/>
        <div className={styles.ButtonContainer}>
            <button onClick={clickLeft}  className={cn(styles.button, styles.buttonLeft)}>Левак</button>
            <button onClick={clickRight} className={cn(styles.button, styles.buttonRight)}>Правак</button>
        </div>

    </div>
}
