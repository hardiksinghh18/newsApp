import NavBar from './components/NavBar';
import './App.css';
import LoadingBar from 'react-top-loading-bar'
import React, { useState } from 'react'
import News from './components/News';
import {
  BrowserRouter,
  Route,
  Navigate,
  Routes
} from "react-router-dom";


const App =()=> {
 const  pageSize=9
 const apikeyone=process.env.REACT_APP_API_KEY_ONE
 const apikeytwo=process.env.REACT_APP_API_KEY_TWO

  const[progress,setProgress]=useState(0)
  

    return (
      <BrowserRouter>
        <div>
        <LoadingBar
        height={3}
        color='#f11946'
        progress={progress}
      />
         <NavBar/>
          <Routes>

            <Route exact path='/' element={<News apikeyone={apikeyone} apikeytwo={apikeytwo} setProgress={setProgress}  key='general' pageSize={pageSize} country="in" category="general" categoryHeading="newsPedia"/>} />
            <Route exact path='/sports'  element={<News apikeyone={apikeyone} apikeytwo={apikeytwo} setProgress={setProgress} key='sports' pageSize={pageSize} country="in" category="sports" categoryHeading="Sports"/>} />
            <Route exact path='/business' element={<News  apikeyone={apikeyone} apikeytwo={apikeytwo} setProgress={setProgress}   key='business' pageSize={pageSize} country="in" category="business" categoryHeading="Business"/>} />
            <Route exact path='/health'  element={<News  apikeyone={apikeyone} apikeytwo={apikeytwo} setProgress={setProgress} key='health' pageSize={pageSize} country="in" category="health" categoryHeading="Health"/>} />
            <Route exact path='/science'  element={<News apikeyone={apikeyone} apikeytwo={apikeytwo} setProgress={setProgress} key='science' pageSize={pageSize} country="in" category="science" categoryHeading="Science"/>} />
            <Route exact path='/entertainment'  element={<News apikeyone={apikeyone} apikeytwo={apikeytwo} setProgress={setProgress} key='entertainment' pageSize={pageSize} country="in" category="entertainment" categoryHeading="Entertainment"/>} />
            <Route exact path='/technology'  element={<News apikeyone={apikeyone} apikeytwo={apikeytwo} setProgress={setProgress} key='technology' pageSize={pageSize} country="in" category="technology" categoryHeading="Technology"/>} />
            <Route path="*" element={<Navigate to ="/" />}/>
          </Routes>
        </div>

       
      </BrowserRouter>
    )
  
}

export default App



