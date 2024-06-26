
export default function PopupWithForm({name, title, isOpen, textButton, onClose, onSubmit, children}) {
  return(
    isOpen && <div className={`popup popup-${name} popup_opened`}>
      <form onSubmit={onSubmit} name={`popup-${name}`} className="popup__container popup__container_type_form" method="post">
        <h2 className="popup__title">{title}</h2>
        <fieldset className="popup__input-container">
            {children}
        </fieldset>
        <button className="popup__submit-btn" type="submit">{textButton}</button>
        <button className="popup__close-btn" onClick={onClose} type="button"> </button>
      </form>
    </div>
  );
}
