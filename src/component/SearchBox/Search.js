import React, { useState } from 'react'
import { MdExpandMore } from 'react-icons/md'
import { Icon, SearchInput, SearchWrapper } from './SearchElements'

function Search({ placeholder, searchTerm, setseacrhTerm, searchHandler }) {

    return (
        <SearchWrapper>
            <SearchInput placeholder={placeholder} value={searchTerm} onChange={searchHandler}></SearchInput>
            <Icon>
                <MdExpandMore />
            </Icon>
        </SearchWrapper>
    )
}

export default Search
