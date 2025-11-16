import { useState } from "react";
import "./Modal.css";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

function Modal({ isOpen, onClose, children }: ModalProps) {
  return (
    <>
      {isOpen && (
        <div>
          <div className="modal-overlay">
            <div className="modal-content">
              {children}

              <p>Das ist der Inhalt des Modals.</p>
              <button className="close-button" onClick={onClose}>
                Zurück zum Kalender
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Modal;
