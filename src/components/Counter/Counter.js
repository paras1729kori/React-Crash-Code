import React, { useState, useEffect } from 'react'
import './Counter.css'

const Counter = (props) => {
    const [currentCount, setCurrentCount] = useState(0)

    const handleClick = () => {
        setCurrentCount(currentCount + props.incrementBy)
    }

    const btnStyle = {
        background: props.bgColor,
        borderRadius:"8px"
    }

    useEffect(() => {
        if(currentCount === 10 || currentCount > 10){
            setCurrentCount(0)
        }
    },[currentCount])

    return (
        <div>
            <button style={btnStyle} className="btn btn-primary" onClick={handleClick} >Increment By {props.incrementBy}</button>
            <h1>{ currentCount }</h1>
        </div>
    )
}

export default Counter;