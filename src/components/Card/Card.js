import React from "react";
import {CurrentUserContext} from "../../contexts/CurrentUserContext";

export default function Card({card, onCardClick, onCardLike, onCardDelete }) {
  const currentUser = React.useContext(CurrentUserContext);
  const isOwn = currentUser._id === card.owner._id;
  const isLiked = card.likes.some(item => item._id === currentUser._id);
  const cardLikeButtonClassName = `photo-gallery__like-btn ${isLiked ? 'photo-gallery__like-btn_active' : ''}`;

  const handleLikeClick = () => {
    onCardLike(card);
  }

  const handleDeleteClick = () => {
    onCardDelete(card);
  }

  return(
    <figure className="photo-gallery__item">
      <img className="photo-gallery__image" src={card.link} alt={card.name} onClick={() => onCardClick(card)}/>
      <figcaption className="photo-gallery__info">
        <p className="photo-gallery__name">{card.name}</p>
        <div className="photo-gallery__like">
          <button className={cardLikeButtonClassName} onClick={handleLikeClick} type="button"> </button>
          <p className="photo-gallery__like-counter">{card.likes.length}</p>
        </div>
      </figcaption>
      {isOwn && (<button className="photo-gallery__delete-btn" onClick={handleDeleteClick} type="button"> </button>)}
    </figure>
  );
}

