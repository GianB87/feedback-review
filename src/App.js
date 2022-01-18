// this is a new component

// a component can only have one parent element (normally a div)
// div could also be an empty tag <></>

// in jsx, you use className instead of class

// there are other rules (instead of for (html) use htmlFor)

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Header from "./components/Header"
import FeedbackList from "./components/FeedbackList"
import FeedbackData from "./data/FeedbackData"
import FeedbackStats from "./components/FeedbackStats"
import FeedbackForm from "./components/FeedbackForm"
import AboutIconLink from './components/AboutIconLink'

import { FeedbackProvider } from './context/FeedbackContext'
import { useState } from "react"
import AboutPage from './pages/AboutPage'

// kind of state: COMPONENT and APP level state
function App() {
    return (
      <FeedbackProvider>

        <Router>
        {/* text is a prop */}
        <Header text='Feedback UI'></Header>
        <div className="container">
            {/* double routes */}
        <Routes>
            <Route
              exact
              path='/'
              element={
                <>
                  <FeedbackForm></FeedbackForm>
                  <FeedbackStats></FeedbackStats>
                  <FeedbackList ></FeedbackList>
                </>
              }
              ></Route>

            <Route path='/about' element={<AboutPage />} />
          </Routes>
          {/* + you can also add NavLink, a way to add class to an active link so it is easy for designing navbars */}
          {/* for post, you can use postparams to retrieve id and use it as request on a sever to retrieve correct data folder 5.4 */}
          {/* other thing to check is Navigate to redirect to certain page depending to an answer of a server, or use the hook useNavigate to change pagte as pleased video 5.5*/}
          {/* remember adding astherisk if wornking with more hooks on the same address */}
              <AboutIconLink></AboutIconLink>
        </div>
        </Router>
    </FeedbackProvider>
    )
    
}
export default App