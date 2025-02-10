import Backdrop from "./Backdrop";
import "../index.css";

// backdrop gives edge background and a place to create the react portal
// needs modal and a portal-root div in index.html to work

const modal = ({ buttonText, closeModal, children }) => {
  return (
    <Backdrop closeModal={closeModal}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        {children}
        <button className="modal-btn" onClick={closeModal}>
          {buttonText}
        </button>
      </div>
    </Backdrop>
  );
};

export default modal;
