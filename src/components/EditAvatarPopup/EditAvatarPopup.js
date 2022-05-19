import React from "react";
import PopupWithForm from "../PopupWithForm/PopupWithForm";

export default function EditAvatarPopup({isOpen, onClose, onUpdateAvatar}) {
  const avatarRef = React.useRef();

  const handleSubmit = (evt) => {
    evt.preventDefault();
    onUpdateAvatar(avatarRef.current.value);
  }

  React.useEffect(() => {
    if(isOpen) {
      avatarRef.current.value = '';
    }

  }, [isOpen]);

  return(
    <PopupWithForm isOpen={isOpen} onSubmit={handleSubmit} onClose={onClose} name="update-avatar" title="Обновить аватар" textButton="Сохранить">
      <input ref={avatarRef} className="popup__item" id="avatar" name="avatar" type="url" required
             placeholder="Ссылка изображение"/>
      <span className="popup__item-error avatar-error"> </span>
    </PopupWithForm>
  );
}
