import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './App.css'
import Header from './components/Header/Header'
import Projects from './components/Projects/Projects'
import Home from './components/Home/Home'
import Education from './components/Education/Education'
import CryptoRepublicWallet from './components/Projects/CryptoRepublicWallet'
import RestToGraphql from './components/Projects/RestToGraphql'
import Cookk from './components/Projects/Cookk'
import RealtyRoom from './components/Projects/RealtyRoom'
import ManageContractors from './components/Projects/ManageContractors'
import Work from './components/Work/Work'

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
            <Route
              path="/crypto-republic-wallet"
              render={() => <CryptoRepublicWallet />}
            />
            <Route
              path="/rest-to-graphql"
              render={() => <RestToGraphql />}
            />
            <Route
              path="/cookk"
              render={() => <Cookk />}
            />
            <Route
              path="/realtyroom"
              render={() => <RealtyRoom />}
            />
            <Route
              path="/manage-contractors"
              render={() => <ManageContractors />}
            />
            <Route
              path="/work"
              render={() => <Work />}
            />
          </div>
        </div>
      </div >
    </Router>
  )
}

export default App
