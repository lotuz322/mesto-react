import React from "react";
import Card from '../Card/Card';
import iconEdit from '../../images/icon-edit.svg';
import {CurrentUserContext} from "../../contexts/CurrentUserContext";

export default function Main({onEditAvatar, onCardClick, onAddPlace, onEditProfile, cards, onCardLike, onCardDelete}) {

  const currentUser = React.useContext(CurrentUserContext);

  return (
    <main className="content">
      <section className="profile">
        <button className="profile__avatar">
          <img className="profile__avatar-img" src={currentUser.avatar} alt="аватар пользователя"/>
          <div className="profile__overlay">
            <img className="profile__avatar-edit-icon" src={iconEdit} onClick={onEditAvatar}/>
          </div>
        </button>
        <div className="profile__info">
          <h1 className="profile__name">{currentUser.name}</h1>
          <p className="profile__about-me">{currentUser.about}</p>
          <button type="button" className="profile__edit-btn" onClick={onEditProfile}> </button>
        </div>
        <button type="button" className="profile__add-btn" onClick={onAddPlace}> </button>
      </section>

      <section className="photo-gallery">
        { cards && cards.map((item, i) => (
          <Card
            card={item}
            key={item._id}
            onCardClick={onCardClick}
            onCardDelete={onCardDelete}
            onCardLike={onCardLike} />
        ))}
      </section>
    </main>
  );
}

