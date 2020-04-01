import React from 'react'
import './App.css'
import HeaderContainer from './components/Header/HeaderContainer'
import NewRecordContainer from './components/NewRecord/NewRecordContainer'
import RecordsContainer from './components/Records/RecordsContainer'

function App() {
  return (
    <div className='appWrapper'>
      <HeaderContainer />
      <NewRecordContainer />
      <RecordsContainer />
    </div>
  )
}

export default App
