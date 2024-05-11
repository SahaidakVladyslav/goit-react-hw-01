import { useState } from 'react'
import './App.css'
import Profile from './components/profile/Profile'
import userData from './components/userData.json'
import FriendList from './components/FriendList/FriendList'

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
      <FriendList/>
    </>
  )
}

export default App
