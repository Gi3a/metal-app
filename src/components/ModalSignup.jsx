import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import '../assets/styles/components/Modal.css'
import { useForm } from 'react-hook-form'
import { setSignUpState, setState } from '../redux/modal/reducer'
import axios from "axios";
import { FaTimes } from 'react-icons/fa'


function ModalSignup() {
	const {
		register,
		formState: { errors },
		handleSubmit,
		reset,
	} = useForm({
		mode: 'onBlur'
	});
	const dispatch = useDispatch()

	const [user, setUser] = useState({})

	const onSubmit = (data) => {
		setUser(data)
		setTimeout(() => {
			reg()
		});
		setTimeout(() => {
			reset()
		});
	}

	const dispatches = () => {
		dispatch(setState())
		dispatch(setSignUpState())
	}

	const reg = () => {
		const { name, email, phone, password } = user
		console.log(user)
		if (name && email && phone && password) {
			axios.post("https://Metal-api.vercel.app/api/signup", user)
				.then(res => console.log(res))
		}
		else {
			alert("invalid input")
		};
	}

	return (
		<div className="hystmodal" id="myModal">
			<div className="hystmodal__window">

				<button
					onClick={() => dispatch(setSignUpState())} data-hystclose className="hystmodal__close">
					<FaTimes />
				</button>
				<h2>Регистрация</h2>
				<form onSubmit={handleSubmit(onSubmit)}>
					<div className="form-control">
						<input
							{...register('name',
								{
									required: true,
									minLength: { value: 3, message: "Некорректное имя" }
								})}
							placeholder="Ваше имя"
						/>
						<label>{errors?.name && <p>Поле обязательно к заполнению!</p>}</label>
					</div>
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
						<input
							{...register('email',
								{
									required: true,
									minLength: { value: 5, message: "Некорректный адрес" }
								})}
							placeholder="Введите почту"
						/>
						<label>{errors?.email && <p>Поле обязательно к заполнению!</p>}</label>
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
							Зарегистрироваться
						</button>
					</div>

				</form>
				<div>Уже есть аккаунт? <a href="/" onClick={dispatches}>Авторизируйтесь</a></div>
			</div>
		</div>


	)
}

export default ModalSignup;