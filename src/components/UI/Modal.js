import { Fragment } from 'react';
import ReactDOM from 'react-dom';
import classes from './Modal.module.css';

const Backdrop = (props) => {
  return <div className={classes.backdrop} onClick={props.onClose} />;
};

const ModalOverlay = (props) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{props.children}</div>
    </div>
  );
};

/* const Modal = (props) => {
    return <Fragment>
        <Backdrop/>
        <ModalOverlay>{props.children}</ModalOverlay>  we could have done it like this if we were not using potals 
    </Fragment>
}; */

//HELPER CONSTANT
const portalElement = document.getElementById('overlays'); //div id in the public index.html where we created out portal.

//PORTALS
const Modal = (props) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(
        <Backdrop onClose={props.onClose} />,
        portalElement
      )}
      {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        portalElement
      )}
    </Fragment>
  );
};

export default Modal;
