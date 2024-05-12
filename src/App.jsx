import { useState } from 'react'
import './App.css'
import Profile from './components/profile/Profile'
import userData from './components/userData.json'
import FriendList from './components/friendList/FriendList'
import fiendData from './components/friendData.json'
import TransactionHistory from './components/transactionHistory/TransactionHistory'
import transactionData from './components/transactionData.json'
function App() {

  return (
    <>
         <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />
      <FriendList 
      props= {fiendData}
      />
      <TransactionHistory props={transactionData}/>
    </>
  )
}

export default App
