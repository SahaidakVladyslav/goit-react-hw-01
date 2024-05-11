import React from 'react';
import friendData from '../friendData.json';

export default function FriendList ()  {
  return (
    <ul>
        {friendData.map(item=> <li key={item.id}>
            <div>
                <img src={item.avatar} alt='Avatar' width={48}/>
                <p>{item.name}</p>
                <p>{item.isOnline? 'Online' : 'Offline'}</p>
            </div>
        </li>)}
    </ul>
  );
}

