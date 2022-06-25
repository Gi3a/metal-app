import React from 'react'
import { TbBuildingFactory2, TbCirclePlus, TbClipboardList, TbLogin } from 'react-icons/tb'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { setState } from '../redux/modal/reducer'
import { removeUser } from '../redux/user/userReducer'
import '../assets/styles/components/Header.css'
function HeaderSecond() {

	const dispatch = useDispatch()
	return (
		<div className='container'>
			<div className="header_left">
				<Link to="/" className="logo">metal.io</Link>
				<Link to="/orders">
					<TbClipboardList />
					Заказы
				</Link>
				<Link to="/companies">
					<TbBuildingFactory2 />Предприятия
				</Link>
			</div>
			<div className="header_right">
				<a onClick={() => dispatch(setState())} >
					<TbLogin />Личный кабинет
				</a>
				<Link onClick={() => dispatch(removeUser())} className="add_order">
					<TbCirclePlus />
					Выйти
				</Link>
			</div>
		</div>
	)
}

export default HeaderSecond