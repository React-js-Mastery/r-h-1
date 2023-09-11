import React from 'react'
import FunctionCompo from './components/FunctionCompo'
import ClassCompo from './components/ClassCompo'

import './App.css'

const App = () => {
  return (
    <div>
      <h1>Styling using Functional and Class components</h1>
      <div className='data'>
        <FunctionCompo />
        <ClassCompo />
      </div>
    </div>
  )
}

export default App
