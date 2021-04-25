import React, { useContext } from 'react'
import { MyContext } from '../../MyContext'

const Test2 = () => {
    const {value, setValue} = useContext(MyContext)
    return (
        <div>
            <button onClick={() => {
                setValue('new value')
            }} className="btn btn-info">Change Value</button>
        </div>
    )
}

export default Test2