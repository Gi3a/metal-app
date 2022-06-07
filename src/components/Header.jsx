import React from 'react';
import { Link } from 'react-router-dom';

import '../assets/styles/components/Header.css'

import { TbBuildingFactory2, TbClipboardList, TbCirclePlus, TbLogin } from 'react-icons/tb'

function Header() {
	return (
		<header>
			<div className="container">
				<div className="header_left">
					<Link to="/" className="logo">metal.ru</Link>
					<Link to="/">
						<TbClipboardList />
						Заказы
					</Link>
					<Link to="/">
						<TbBuildingFactory2 />Предприятия
					</Link>
				</div>
				<div className="header_right">
					<Link to="/">
						<TbLogin />Войти
					</Link>
					<Link to="/" className="add_order">
						<TbCirclePlus />
						Заявка
					</Link>
				</div>
			</div>
		</header>
	)
}

export default Header