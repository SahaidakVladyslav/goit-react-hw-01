import css from './Profile.module.css'


export default function Profile ({name,tag,location,image,stats}) {
    return <>
    <div className='profile__box'>
  <div>
    <img
      src={image}
      alt="User avatar"
    />
    <p>{name}</p>
    <p>@{tag}</p>
    <p>{location}</p>
  </div>

  <ul className='profile__list'>
    <li className='profile__item'>
      <span>Followers </span>
      <span>{stats.followers}</span>
    </li>
    <li className='profile__item'>
      <span>Views </span>
      <span>{stats.views}</span>
    </li>
    <li className='profile__item'>
      <span>Likes </span>
      <span>{stats.likes}</span>
    </li>
  </ul>
</div>
    </>
}