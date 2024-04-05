import Card from './Card'
import { useContext } from 'react';
import { ResContext } from '../context/ResContext';
import './Search.css'

function Search() {

    const Restlt = useContext(ResContext);

    return(
        <>
            <div id="divider"></div>
            <div id="Search">
                {
                    Restlt.results.map((res) => {
                        return <Card desc={res.alt_description} img={res.urls.small_s3} title={res.user.first_name} likeNum={res.likes}/>
                    })
                }
            </div>
        </>
    )
}

export default Search