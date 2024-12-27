import React from 'react'
import {BrowserRouter as Router, Route ,Routes} from 'react'
import Dashboard from './components/Dashboard'
import PatientList from './components/PatientList'
import AppointementSchedular from './components/AppointementSchedular'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard/>}/>
        <Route path="/patients" element={<PatientList/>}/>
        <Route path="/appointments" element={<AppointementSchedular/>}/>
      </Routes>
    </Router>
  )
}

export default App

