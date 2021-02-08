import React,{useEffect} from 'react'
import PropTypes from 'prop-types'

const Modal = ({ onRequestClose,movie,seatNumber,details }) => {
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
   
	return (
		<div className="modal__backdrop">
			<div className="modal__container">
				<h3 className="modal__title">{movie.name}</h3>
				<h4 className='modal__content'> Coustmer Name - { details.name}</h4>
				<h4 className='modal__content'> Coustmer Email - { details.email}</h4>
				<h4 className='modal__content'> Seat Number - { seatNumber}</h4>
				
                
				
                <span>   </span>
				<button type="button" onClick={onRequestClose}>
					Cancel
				</button>
			</div>
		</div>
	);
};

Modal.propTypes = {

}

export default Modal
