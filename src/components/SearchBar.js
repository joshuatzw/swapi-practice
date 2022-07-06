import { useState, useEffect } from 'react'
import './SearchBar.css'

export default function SearchBar(props) {
    let [searchText, setSearchText] = useState('')
    
    function handleChange(e) {
        setSearchText(e.target.value)
        console.log(searchText)
    }

    useEffect(()=>{
        setSearchText(props.itemToShow)
    }, [props.itemToShow])


    // useEffect(()=>{
    //     setSearchText(searchText)
    //     console.log("oi")
    // }, [searchText])


    return(
    <div> 
        <input className="searchInput" type="text" onChange={handleChange} placeholder="Search The Galaxy..." value={searchText} />
        <button onClick> Search! </button>
    </div>
    )
}