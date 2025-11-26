import { useEffect, useRef } from "react";
import "./Popup.css";

function Popup({ showPopup, closePopup, children }) {
  const popoverRef = useRef(null);

  useEffect(() => {
    if (!popoverRef.current) return;

    if (showPopup) {
      popoverRef.current.showPopover();
    } else {
      popoverRef.current.hidePopover();
    }
  }, [showPopup]);

  return (
    <div id="mypopover" popover="manual" anchor="none" ref={popoverRef}>
      <div className="popup-positioner">
        <div className="popup-content">
          <button className="close-btn" onClick={closePopup}>
            <span className="icon icon-clear"></span>
          </button>
          {children}
        </div>
      </div>
    </div>
  );
}

export default Popup;

// function Popup({ showPopup, closePopup, children }) {
//   if (!showPopup) {
//     return null;
//   }
//   return (
//     <div className="popup">
//       <div popoverTarget="mypopover" className="popup-inner">
//         <button className="close-btn" onClick={closePopup}>
//           <span className="icon icon-clear"></span>
//         </button>

//         <div id="mypopover" popover="">
//           {children}
//         </div>

//       </div>
//     </div>
//   );
// }

// export default Popup;
