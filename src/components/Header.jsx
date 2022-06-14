import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux"
import '../assets/styles/components/Header.css'

import { TbBuildingFactory2, TbClipboardList, TbCirclePlus, TbLogin } from 'react-icons/tb'
import { setState } from '../redux/modal/reducer';
import Modal from './Modal';

function Header() {

	const dispatch = useDispatch()
	const modalSelector = useSelector((state) => state.modal.modalState)

	return (
		<>
			<header>
				<div className="container">
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
							<TbLogin />Войти
						</a>
						<Link to="/add-order" className="add_order">
							<TbCirclePlus />
							Заявка
						</Link>
					</div>
				</div>

			</header>
			{modalSelector ? <Modal /> : ''}
		</>
	)
}

export default Header