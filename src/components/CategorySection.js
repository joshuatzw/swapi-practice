import { useState } from 'react'
import CategoryButton from './CategoryButton'
import './CategorySection.css'
import SearchBar from './SearchBar'

export default function Category(props) {
    
    const categoryTypes = ["people", "films", "starships", "vehicles", "species", "planets"]
    const DEFAULTURL = 'swapi.dev/api/'
    const [link, setLink] = useState('')


    function handleCatClick(e) {
        // adjusts URL based on button clicked, updates PropsHandler to reflect the latest URL.
        let newLink = DEFAULTURL + e.target.value + "/"
        setLink(newLink)
    }


    
    return(
        <div>
            <CategoryButton name={categoryTypes[0]} handleCatClick={handleCatClick} />
            <CategoryButton name={categoryTypes[1]} handleCatClick={handleCatClick} />
            <CategoryButton name={categoryTypes[2]} handleCatClick={handleCatClick} />
            <CategoryButton name={categoryTypes[3]} handleCatClick={handleCatClick} />
            <CategoryButton name={categoryTypes[4]} handleCatClick={handleCatClick} />
            <CategoryButton name={categoryTypes[5]} handleCatClick={handleCatClick} />

            <SearchBar itemToShow={ link }/>
        </div>
    )
}