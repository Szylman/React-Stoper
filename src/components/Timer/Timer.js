import React, { useState, useEffect } from 'react';
import styles from '../Timer/Timer.module.scss'
import Button from '../Button/Button';
import FormatTime from '../FormatTime/FormatTime';

const Timer = props => {
    const[time, setTime]=useState(0);
    const[timer,setTimer]=useState(null); 

    useEffect(() => {
        return () => {
           if(timer) clearInterval(timer);
        };
    }, []);

    function handleStart(e){
        e.preventDefault();
        if(timer) return false; 
        setTimer(
            setInterval(
            function(){
            setTime(time => time + 100);
        },
        100) 
        )
    }

    function handleStop(e){
        e.preventDefault();
        clearInterval(timer);
        setTimer(null);
    }

    function handleReset(e){
        e.preventDefault();
        setTime(0);
    }


    return (
        <div>
            <FormatTime time={time}/>
            <div className={styles.buttons_container}>
            <Button onClick={handleStart}>Start</Button>
            <Button onClick={handleStop}>Stop</Button>
            <Button onClick={handleReset}>Reset</Button>
            </div>
        </div>
    );
};

export default Timer;