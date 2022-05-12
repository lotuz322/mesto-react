import React from "react";

export default function Card({card, onCardClick}) {
  return(
    <figure className="photo-gallery__item">
      <img className="photo-gallery__image" src={card.link} alt={card.name} onClick={() => onCardClick(card)}/>
      <figcaption className="photo-gallery__info">
        <p className="photo-gallery__name">{card.name}</p>
        <div className="photo-gallery__like">
          <button className="photo-gallery__like-btn" type="button"> </button>
          <p className="photo-gallery__like-counter">{card.likes.length}</p>
        </div>
      </figcaption>
      <button className="photo-gallery__delete-btn" type="button"> </button>
    </figure>
  );
}
