import React from 'react'
import { useDispatch } from 'react-redux'
import '../assets/styles/components/Modal.css'
import { useForm } from 'react-hook-form'
import { setState } from '../redux/modal/reducer'

import { FaTimes } from 'react-icons/fa'

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
		<div className="hystmodal" id="myModal">
			<div className="hystmodal__window">

				<button
					onClick={() => dispatch(setState())} data-hystclose class="hystmodal__close">
					<FaTimes />
				</button>
				<h2>Авторизация</h2>
				<form onSubmit={handleSubmit(onSubmit)}>
					<div className="form-control">
						<input
							{...register('phone',
								{
									required: true,
									minLength: { value: 9, message: "Некорректный номер" }
								})}
							placeholder="Введите номер телефона"
						/>
						<label>{errors?.phone && <p>Поле обязательно к заполнению!</p>}</label>
					</div>
					<div className="form-control">
						<input {...register('password',
							{
								required: true,
								minLength: { value: 5, message: "Некорректный пароль" }
							})}
							placeholder="Введите пароль"
						/>
						{errors?.password && <p>Поле обязательно к заполнению!</p>}
					</div>
					<div className="form-control">
						<button type="submit">
							Войти
						</button>
					</div>
				</form>
			</div>
		</div>


	)
}

export default Modal