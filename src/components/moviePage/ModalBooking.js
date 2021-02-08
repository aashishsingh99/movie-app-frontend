import React,{useEffect} from 'react'
import PropTypes from 'prop-types'

const Modal = ({ onRequestClose,bus,seatNumber,bookBus }) => {
	// Use useEffect to add an event listener to the document
	useEffect(() => {
		function onKeyDown(event) {
			if (event.keyCode === 27) {
				// Close the modal when the Escape key is pressed
				onRequestClose();
			}
		}

		// Prevent scolling
		document.body.style.overflow = "hidden";
		document.addEventListener("keydown", onKeyDown);

		// Clear things up when unmounting this component
		return () => {
			document.body.style.overflow = "visible";
			document.removeEventListener("keydown", onKeyDown);
		};
	});
    const book=()=>{
        bookBus(seatNumber,bus._id); 
        onRequestClose();
    }
	return (
		<div className="modal__backdrop">
			<div className="modal__container">
				<h3 className="modal__title">{bus.name}</h3>
				<h4 className='modal__content'> Start Time - { bus.startTime}</h4>
				<h4 className='modal__content'> Reach Time - { bus.reachTime}</h4>
				<h4 className='modal__content'> Fare - {bus.fare} </h4>
                
				<button type="button" onClick={book}>
					Book
				</button>
				<span>     </span>
				<button type="button" onClick={onRequestClose}>
					cancel
				</button>
			</div>
		</div>
	);
};

Modal.propTypes = {

}

export default Modal
