import "./Popup.css";

function Popup({ showPopup, closePopup, children }) {
  if (!showPopup) {
    return null;
  }
  return (
    <div className="popup">
      <div className="popup-inner">
        <button className="close-btn" onClick={closePopup}>
          <span className="icon icon-clear"></span>
        </button>

        {children}
      </div>
    </div>
  );
}

export default Popup;
