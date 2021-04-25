import React, { useState } from 'react'
import './SearchBar.css'

const SearchBar = (props) => {
    const [searchValue, setSearchValue] = useState('')
    const handleInputChange = (event) => {
        setSearchValue(event.target.value)
    }
    const handleClear = () => {
        setSearchValue('')
    }
    const textInside = searchValue.length > 0
    
    const filteredProducts = props.list_item.filter((prod) => {
        return prod.includes(searchValue)
    })

    return (
        <div>
            <input type="text" value={searchValue} onChange={handleInputChange} />
            { textInside &&  <button onClick={handleClear}>Clear</button> }
            <ul style = {{ listStyleType:"none" }}>
                {filteredProducts.map((prod) => {
                    return <li>{prod}</li>
                })}
            </ul>
            
        </div>
    )
}

export default SearchBar