import React from 'react'
import { useDispatch } from 'react-redux'
import '../assets/styles/components/Modal.css'
import { setState } from '../redux/modal/reducer';


function Modal() {

	const dispatch = useDispatch()

	return (
		<div>

			<div class="hystmodal" id="myModal">
				<div class="hystmodal__window">
					<button onClick={() => dispatch(setState())} data-hystclose class="hystmodal__close">Close</button>
					Текст модального окошка.
					<img src="img/photo.jpg" alt="Изображение в окне" />
				</div>
			</div>

		</div>
	)
}

export default Modal