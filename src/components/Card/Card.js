import React from "react";

export default function Card(props) {
  return(
    <figure className="photo-gallery__item">
      <img className="photo-gallery__image" src={props.info.link} alt={props.info.name} onClick={() => props.onCardClick(props.info)}/>
      <figcaption className="photo-gallery__info">
        <p className="photo-gallery__name">{props.info.name}</p>
        <div className="photo-gallery__like">
          <button className="photo-gallery__like-btn" type="button"> </button>
          <p className="photo-gallery__like-counter">{props.info.likes.length}</p>
        </div>
      </figcaption>
      <button className="photo-gallery__delete-btn" type="button"> </button>
    </figure>
  );
}
