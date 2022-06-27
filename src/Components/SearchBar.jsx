import React from 'react'

const SearchBar = (props) => {
    return (
        <input className='SearchBar' onChange={props.handleChangeTab} value={props.value}                 />
    )
}

export default SearchBar