import React, { useContext } from 'react'
import { MyContext } from '../../MyContext'
import Test2 from './Test2'

const Test = () => {
    const {value, setValue} = useContext(MyContext)
    return (
        <div>
            {value}
            <Test2 />
            <br />
        </div>
    )
}

export default Test