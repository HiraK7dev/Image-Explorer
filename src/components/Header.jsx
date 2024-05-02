import './Header.css'
import searchIcon from '../assets/searchIcon.png'
import { NavLink } from 'react-router-dom'
import { useContext, useState } from 'react';
import { setResContext, setLoader, setError } from '../context/Context';

function Header(){
    //Api response state
    const setRestlt = useContext(setResContext);
    const setisLoading = useContext(setLoader);
    const setisError = useContext(setError);

    const [searchInput, setSearchInput] = useState(``);
    const url = `https://api.unsplash.com/search/photos?page=1&query=${searchInput}&per_page=28`;
    function handleChange(e) {
        const { value } = e.target;
        setSearchInput(value);
    }
    function handleSubmit(e) {
        e.preventDefault();
        getApi(); 
    }
    async function getApi() {
        setisLoading(1);
        try {
            const responseJson = await fetch(url, {
                method: `GET`,
                headers: {
                    'Authorization': import.meta.env.VITE_API_KEY
                }
            });
            const response = await responseJson.json();
            setRestlt(response);
        } catch (error) {
            setisError(1);
        }
        setisLoading(0);
    }
    return(
        <div id="header">
            <div id='pages'>
                <NavLink className={({isActive})=>{ return(isActive ? "isActive" : "navButtons")}} to='/'>HOME</NavLink>
                <NavLink className={({isActive})=>{ return(isActive ? "isActive" : "navButtons")}} to='/collections'>COLLECTIONS</NavLink>
                <NavLink className={({isActive})=>{ return(isActive ? "isActive" : "navButtons")}} to='/about'>ABOUT</NavLink>
            </div>
            <form id='getSearch' onSubmit={handleSubmit}>
                <input id='searchField' value={searchInput} onChange={handleChange} type='text' placeholder='Search...' />
                <button id='searchButton'><img id='searchButtonImage' src={searchIcon} /></button>
            </form>
        </div>
    )
}

export default Header