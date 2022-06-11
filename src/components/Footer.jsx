import React from 'react'

import { Link } from 'react-router-dom';

import '../assets/styles/components/Footer.css';

import { TbMail, TbBrandTelegram, TbPhone } from 'react-icons/tb'

function Footer() {
	return (
		<footer>
			<div className="container">
				<div className="footer_left">
					<Link to="/">FAQ</Link>
					<Link to="/">Политика конфиденциальности</Link>
				</div>
				<div className="footer_right">
					<a><TbMail /></a>
					<a><TbBrandTelegram /></a>
					<a><TbPhone /></a>
				</div>
			</div>
			<div className="footer_mid">
				<span>© 2022 METAL.RU, Inc. All Rights Reserved.</span>
			</div>
		</footer>
	)
}

export default Footer