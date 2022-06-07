import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

function Headers() {
	return (
		<Post>
			<div className='container'>
				<div className="up-header">
					<p className='phone'>+ 7 (917) 933-34-53</p>
					<p className='email'>salleleads@yandex.ru</p>

					<button className='login'>Вход</button>
					<button className='registr'>Регистрация</button>
				</div>
			</div>
			<div className='main-header'>
				<div className="container">
					<div className='main-header_flex'>
						<div>
							<h2>Металлообработки.рф</h2>
							<p>Челябинская область</p>
						</div>
						<Link to='#'>Каталог услуг</Link>
						<Link to='#'>FAQ</Link>
						<button className='btn purple-btn'>Заказы</button>
						<button className='btn green-btn'>Разместить заказ</button>
					</div>
				</div>
			</div>
		</Post>
	)
}

const Post = styled.div`
	.container {
		padding: 0px 250px;
	}

	.phone {
		font-size: 15px;
		margin: 7px 80px 7px 0
	} 

	.email {
		font-size: 15px;
		margin: 7px auto 7px 0
	}

	.up-header {
		display: flex;
	}

	.login, .registr {
		border: none;
		background-color: transparent;
		padding: 0;
		font-size: 15px;
	}

	.registr {
		margin-left: 25px;
	}

	.main-header {
		background-color: #252525;
	}

	.main-header_flex {
		display: flex;
		align-items: center;
	}

	.main-header_flex h2 {
		font-size: 19px;
		color: #fff; 
		margin: 5px 120px 7px 0;
	}

	.main-header_flex p {
		color: #FFD600;
		font-size: 15px;
		font-weight: 700;
		margin: 0px 0px 7px;
	}

	.main-header_flex a {
		text-decoration: none;
		font-size: 15px;
		color: #fff;
		margin-right: 55px;
	}

	.main-header_flex a:nth-child(2n+1) {
		margin-right: auto;
	}

	.btn {
		width: 177px;
		border: none;
		color: #fff;
		font-size: 15px;
		padding: 8px 0px;
		border-radius: 5px;
	}

	.purple-btn {
		background-color: #7A3DD0;
		margin-right: 25px;
	}

	.green-btn {
		background-color: #2ACC61;
	}
`

export default Headers