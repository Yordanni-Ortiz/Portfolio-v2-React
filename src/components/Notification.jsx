import React from 'react';
import { Toast, ToastContainer } from 'react-bootstrap';
import '../assets/styles/Notification.css'

const Notification = ({ variant, message, show, handleClose }) => {

    return (
        <div className="notification-container">
            <ToastContainer className='toastContainer'>
                <Toast
                    className="d-inline-block m-1 text-light"
                    bg={variant}
                    show={show} 
                    delay={3000}
                    onClose={handleClose}  
                    autohide
                >
                    <Toast.Body className={'text-white'}>
                        {message}
                    </Toast.Body>
                </Toast>
            </ToastContainer>
        </div>
    );
};

export default Notification;