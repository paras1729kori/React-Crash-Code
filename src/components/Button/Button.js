import React from 'react'

const Button = (props) => {

    return (
        <div>
            <button className="btn btn-success m-1">{props.children}</button>
        </div>
    )
}

export default Button
