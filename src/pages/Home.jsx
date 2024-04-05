import { useState } from 'react'
import { ResContext, setResContext } from "../context/ResContext";
import Header from '../components/Header'
import Search from '../components/Search'
import './Home.css'

function Home() {
  //Api response state
  const [res, setRes] = useState(null);

  return (
    <>
    <setResContext.Provider value={setRes}>
      <ResContext.Provider value={res}>
        <Header />
          {
            res ? <div id='searchData'><Search/></div> : 
            <div id='bg'>
              <div id='Home'>
                <div id='title'>
                  <h1 id='titleName'>Image<br/>Explorer</h1><br />
                  <p id='titleSubname'>&nbsp;Change the way you experience</p>
                </div>
              </div>
            </div>
          }
      </ResContext.Provider>
    </setResContext.Provider>
    </>
  )
}

export default Home