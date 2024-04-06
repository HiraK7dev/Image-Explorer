import { useState } from 'react'
import { ResContext, setResContext, setLoader, setError } from "../context/Context";
import Header from '../components/Header'
import Search from '../components/Search'
import './Home.css'
import Loading from './Loading';
import Error from './Error';

function Home() {
  //Api response state
  const [res, setRes] = useState(null);
  //Loading status
  const [isLoading, setisLoading] = useState(0);
  //Checking Errors
  const [isError, setisError] = useState(0);

  if (isLoading) {
    return <Loading />
  }
  if (isError) {
    return <Error />
  }
  return (
    <>
    <setResContext.Provider value={setRes}>
      <ResContext.Provider value={res}>
        <setLoader.Provider value={setisLoading}>
          <setError.Provider value={setisError}>
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
          </setError.Provider>
          </setLoader.Provider>
      </ResContext.Provider>
    </setResContext.Provider>
    </>
  )
}

export default Home