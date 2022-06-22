import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import '../assets/styles/components/Modal.css'
import { useForm } from 'react-hook-form'
import { setState, setSignUpState } from '../redux/modal/reducer'
import axios from "axios";
import { FaTimes } from 'react-icons/fa'
import { Link } from 'react-router-dom'

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
		reg(data)
		reset()
	}

	const [user, setUser] = useState({
		phone: "",
		password: ""
	})

	const dispatches = () => {
		dispatch(setState())
		dispatch(setSignUpState())
	}

	const reg = (data) => {
		const { email, password } = data
		console.log(data)
		if (email && password) {
			axios.post("https://metal-api.vercel.app/api/login", data)
				.then(res => {
					localStorage.setItem('token', res.data.accessToken);
					// общий setUser и setAuth состояние, для идентификации запуска сессии на клиенте
				})
		}
		else {
			alert("invalid input")
		};
	}

	return (
		<div className="hystmodal" id="myModal">
			<div className="hystmodal__window">

				<button
					onClick={() => dispatch(setState())} data-hystclose className="hystmodal__close">
					<FaTimes />
				</button>
				<h2>Авторизация</h2>
				<form onSubmit={handleSubmit(onSubmit)}>
					<div className="form-control">
						<input
							{...register('email',
								{
									required: true,
									minLength: { value: 5, message: "Некорректный адрес" }
								})}
							placeholder="Введите почту"
						/>
						<label>{errors?.phone && <p>Поле обязательно к заполнению!</p>}</label>
					</div>
					<div className="form-control">
						<input type="password" {...register('password',
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
				<div>Нет аккаунта? <a href='#' onClick={dispatches} > Зарегистрируйтесь</a></div>
			</div>
		</div>


	)
}

export default Modal