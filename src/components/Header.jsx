import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from "react-redux"
import '../assets/styles/components/Header.css'

import { TbBuildingFactory2, TbClipboardList, TbCirclePlus, TbLogin } from 'react-icons/tb'
import { setState } from '../redux/modal/reducer';

function Header() {

	const dispatch = useDispatch()


	return (
		<header>
			<div className="container">
				<div className="header_left">
					<Link to="/" className="logo">metal.ru</Link>
					<Link to="/orders">
						<TbClipboardList />
						Заказы
					</Link>
					<Link to="/companies">
						<TbBuildingFactory2 />Предприятия
					</Link>
				</div>
				<div className="header_right">
					<Link onClick={() => dispatch(setState())} to="/">
						<TbLogin />Войти
					</Link>
					<Link to="/add-order" className="add_order">
						<TbCirclePlus />
						Заявка
					</Link>
				</div>
			</div>
		</header>

	)
}

export default Header