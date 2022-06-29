import React from 'react'
import { useTitle } from '../utils/useTitle';
import "../assets/styles/pages/Account.css"
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { removeUser } from '../redux/user/userReducer';

function Account() {
	useTitle('Account');
	const user = useSelector((state) => state.user.userState)
	const dispatch = useDispatch()
	return (
		<div className='page'>
			<div>
				<h2>Мои покупки</h2>
				<a>Список покупок</a>

			</div>
			<div>
				<h2>Мой кошелек</h2>
				<span>Баланс: {user[0].balance}</span>
				<a>Пополнить баланс</a>
			</div>
			<div>
				<h2>Личные данные</h2>
				<h3>{user[0].name}</h3>
				<span>{user[0].email}</span>
				<span>{user[0].phone}</span>
				<a>Посмотреть все данные</a>
				<Link to="/" onClick={() => dispatch(removeUser())}>Выйти</Link>
			</div>
			<div>
				<h2>Размещенные заказы</h2>

			</div>
		</div>
	)
}

export default Account