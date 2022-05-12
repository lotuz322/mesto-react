import React from "react";

export default function ImagePopup({card, onClose}) {
  return(
    card && <div className="popup popup-view-image popup_opened">
      <figure className="popup__container popup__container_type_view-image">
        <img className="popup__image" src={card.link}/>
        <figcaption>
          <p className="popup__paragraph">{card.name}</p>
        </figcaption>
        <button className="popup__close-btn" type="button" onClick={onClose}> </button>
      </figure>
    </div>
  );
}
