import React, { useEffect, useState, useRef} from 'react'
import './CountdownTimer.css'

const CountdownTimer = () => {
    const [time, setTime] = useState(0);
    const [Active, setActive] = useState(false);
    const [Pause, setPause] = useState(false);
    const intervalRef = useRef(null);

    const handleInput = (event) =>{
        setTime(parseInt(event.target.value * 60))
    }
    const formatTime =()=>{
        const min = String(Math.floor(time/60)).padStart(2,'0');
        const sec = String(time%60).padStart(2,'0');
        return `${min} : ${sec}`
    }

    const handleStart=()=>{
        setActive(true);
        setPause(false)
    }
    useEffect(()=>{
            if(Active && Pause && time>0){
                intervalRef.current = setInterval(()=>{
                    setTime((prev)=> prev-1)
                },1000)
            }
            else if(time===0){
                clearInterval(intervalRef.current);
                setActive(false);
                alert('Time is Up')
            }
            return ()=> clearInterval(intervalRef.current)
    },[Active,Pause,time])

    const handlePause = ()=>{
        setPause(!Pause)
    }
    const handleReset = ()=>{
        clearInterval(intervalRef.current);
        setActive(false);
        setPause(false);
        setTime(0);
    }
  return (
    <div className='countdown-timer'>
        <h1 >Countdown Timer</h1>
        <div className='timer-display'>
            <input
            type='Nymber'
            placeholder='Enter time in Minutes'
            onChange={handleInput}
            />
            <div>{formatTime()}</div>
        </div>
        <div className='timer-controls'>
            <button onClick={handleStart} disabled={!Active && Pause}>Start</button>
            <button onClick={handlePause} disabled={!Active}>{Pause? 'Pause':'Resume'}</button>
            <button onClick={handleReset}>Reset</button>
        </div>
    </div>
  )
}

export default CountdownTimer