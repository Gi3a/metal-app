import React from 'react'
import { useDispatch } from 'react-redux'
import '../assets/styles/components/Modal.css'
import { useForm } from 'react-hook-form'
import { setState } from '../redux/modal/reducer'

function Modal() {
	const {
		register,
		formState: { errors },
		handleSubmit,
		reset,
	} = useForm({
		mode: 'onBlur'
	});
	const dispatch = useDispatch()

	const onSubmit = (data) => {
		alert(JSON.stringify(data))
		reset()
	}

	return (
		<div>

			<div className="hystmodal" id="myModal">
				<div className="hystmodal__window">
					<div className='modal-center'>
						<button onClick={() => dispatch(setState())} data-hystclose class="hystmodal__close">Close</button>
						<h2>Авторизация</h2>
						<form onSubmit={handleSubmit(onSubmit)}>
							<label>
								Your phone:
								<input {...register('phone', { required: true, minLength: { value: 9, message: "Некорректный номер" } })} />
							</label>
							<div style={{ height: 40 }}>
								{errors?.phone && <p>Поле обязательно к заполнению!</p>}
							</div>
							<label>
								Your password:
								<input {...register('password', { required: true, minLength: { value: 5, message: "Некорректный пароль" } })} />
							</label>
							<label>
								<input type="submit" />
							</label>
						</form>
					</div>
				</div>
			</div>

		</div>
	)
}

export default Modal