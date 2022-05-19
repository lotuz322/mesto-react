import React from "react";
import PopupWithForm from "../PopupWithForm/PopupWithForm";

export default function AddPlacePopup({onClose, onAddPlace, isOpen}) {
  const [name, setName] = React.useState('');
  const [link, setLink] = React.useState('');
  const handleSubmit = evt => {
    evt.preventDefault();
    onAddPlace(name, link);
  }

  React.useEffect(() => {
    if(!isOpen) {
      setName('');
      setLink('');
    }

  }, [isOpen]);

  return(
    <PopupWithForm onSubmit={handleSubmit} isOpen={isOpen} onClose={onClose} name="add-card" title="Новое место" textButton="Сохранить">
      <input value={name} onChange={evt => setName(evt.target.value)} className="popup__item" id="add-card-name" type="text" name="add-card-name" required minLength="2"
             maxLength="30" placeholder="Название места"/>
      <span className="popup__item-error add-card-name-error"> </span>
      <input value={link} onChange={evt => setLink(evt.target.value)} className="popup__item" id="add-card-url" name="add-card-url" type="url" required
             placeholder="Ссылка на сайт"/>
      <span className="popup__item-error add-card-url-error"> </span>
    </PopupWithForm>
  );
}
