import React from "react";
import PopupWithForm from "../PopupWithForm/PopupWithForm";
import {CurrentUserContext} from "../../contexts/CurrentUserContext";

export default function EditProfilePopup({isOpen, onClose, onUpdateUser}) {
  const currentUser = React.useContext(CurrentUserContext);
  const [name, setName] = React.useState('');
  const [description, setDescription] = React.useState('');

  React.useEffect(() => {
    setName(currentUser.name);
    setDescription(currentUser.about);
  }, [currentUser, isOpen]);

  const handleSubmit = evt => {
    evt.preventDefault();

    onUpdateUser({
      name,
      about: description
    });
  }

  return(
    <PopupWithForm isOpen={isOpen} onSubmit={handleSubmit} onClose={onClose} name="edit-profile" title="Редактировать профиль" textButton="Создать">
      <input value={name} onChange={evt => setName(evt.target.value)} className="popup__item" id="name" type="text" name="name" required minLength="2" maxLength="40"
             placeholder="Введите имя"/>
      <span className="popup__item-error name-error"> </span>
      <input value={description} onChange={evt => setDescription(evt.target.value)} className="popup__item" id="about" type="text" name="about" required minLength="2" maxLength="200"
             placeholder="Расскажите о себе"/>
      <span className="popup__item-error about-error"> </span>
    </PopupWithForm>
  );
}
