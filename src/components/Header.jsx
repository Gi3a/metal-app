import React from 'react'
import { Link } from 'react-router-dom'

import '../assets/styles/components/Header.css'

import { BsFillTelephoneFill, BsFillEnvelopeFill } from 'react-icons/bs'


function Header() {
	return (
		<header>
			<nav className="header__top header__el">
				<div className="container">
					<div className="header__top__left header__el__part">
						<a tel="+79179333453">
							<BsFillTelephoneFill /> +7(917)933-34-53
						</a>
						<a href="mailto:support@metal.ru">
							<BsFillEnvelopeFill /> support@metal.ru
						</a>
					</div>
					<div className="header__top__right header__el__part">
						<a href="#">Вход</a>
						<a href="#">Регистрация</a>
					</div>
				</div>
			</nav>
			<nav className="header__bottom header__el">
				<div className="container">
					<div className="header__bottom__left header__el__part">
						<div className="logotype">
							<Link to="/">Метал.ру</Link>
							<a href="#">Челябинская область</a>
						</div>
						<Link to="/catalog">Каталог услуг</Link>
						<Link to="/faq">FAQ</Link>
					</div>
					<div className="header__bottom__right header__el__part">
						<Link to="/orders">Заказы</Link>
						<Link to="/add-order">Разместить заказ</Link>
					</div>
				</div>
			</nav>
		</header>
	)
}

export default Header