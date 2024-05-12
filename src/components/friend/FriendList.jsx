import css from './FriendList.module.css'


export default function FriendList ({props})  {
  return (
    <ul>
        {props.map(item=> <li key={item.id}>
            <div>
                <img src={item.avatar} alt='Avatar' width={48}/>
                <p>{item.name}</p>
                <p>{item.isOnline? 'Online' : 'Offline'}</p>
            </div>
        </li>)}
    </ul>
  );
}

