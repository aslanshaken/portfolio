import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './App.css'
import Header from './components/Header/Header'
import Projects from './components/Projects/Projects'
import Home from './components/Home/Home'
import Education from './components/Education/Education'

const App = () => {
  return (
    <Router>
      <div className="app">
        <Header />
        <div className="app__content-container">
          <div className="app__content">
            <Route
              exact
              path="/"
              render={() => <Home />}
            />
            <Route
              path="/education"
              render={() => <Education />}
            />
            <Route
              path="/projects"
              render={() => <Projects />}
            />
          </div>
        </div>
      </div >
    </Router>
  )
}

export default App
