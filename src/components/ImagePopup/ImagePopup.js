import React from "react";

export default function ImagePopup(props) {
  return(
    props.card !== null && <div className="popup popup-view-image popup_opened">
      <figure className="popup__container popup__container_type_view-image">
        <img className="popup__image" src={props.card.link}/>
        <figcaption>
          <p className="popup__paragraph">{props.card.name}</p>
        </figcaption>
        <button className="popup__close-btn" type="button" onClick={props.onClose}> </button>
      </figure>
    </div>
  );
}
