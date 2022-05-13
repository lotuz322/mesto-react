import Api from "../../utils/Api";
import React from "react";
import Card from '../Card/Card';
import iconEdit from '../../images/icon-edit.svg';


export default function Main({onEditAvatar, onCardClick, onAddPlace, onEditProfile}) {
  const [userName, setUserName] = React.useState('');
  const [userDescription , setUserDescription ] = React.useState('');
  const [userAvatar, setUserAvatar] = React.useState('');
  const [cards , setCards] = React.useState([]);

  React.useEffect(() => {
    Promise.all([Api.getProfile(), Api.getInitialCards()])
      .then(value => {
        setUserName(value[0].name);
        setUserDescription(value[0].about);
        setUserAvatar(value[0].avatar);
        setCards(value[1]);
      }).catch((err) => console.log(err));
  }, [])
    return (
        <main className="content">
            <section className="profile">
                <button className="profile__avatar">
                    <img className="profile__avatar-img" src={userAvatar} alt="аватар пользователя"/>
                    <div className="profile__overlay">
                        <img className="profile__avatar-edit-icon" src={iconEdit} onClick={onEditAvatar}/>
                    </div>
                </button>
                <div className="profile__info">
                    <h1 className="profile__name">{userName}</h1>
                    <p className="profile__about-me">{userDescription}</p>
                    <button type="button" className="profile__edit-btn" onClick={onEditProfile}> </button>
                </div>
                <button type="button" className="profile__add-btn" onClick={onAddPlace}> </button>
            </section>

            <section className="photo-gallery">
              { cards && cards.map((item, i) => (
                <Card onCardClick={onCardClick} card={item} key={item._id} />
              ))}
            </section>
        </main>
    );
}

