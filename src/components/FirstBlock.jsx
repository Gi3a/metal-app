import React from 'react'
import styled from 'styled-components'
import Map from '../assets/images/maps/main-map.png'

function FirstBlock() {
	return (
		<Page>
			<div className="first-block">
				<div className="container">
					<div className='first-info'>
						<h1 className='first-h1'>
							Центр металлообработки
						</h1>
						<p className='first-discr'>
							Сервис, позволяющий заказчику и производителю найти друг друга
						</p>
						<div className='input-wrapper'>
							<input className='input' placeholder='Что нужно сделать?' type="text" />
							<button className='input-btn'>Найти</button>
						</div>
						<p className='under-label'>
							Например: круглая шлифовка деталей
						</p>
					</div>
					<div className='first-map'>
						<img src={Map} alt="" />
					</div>
				</div>
			</div>
			<div className='second-block'>
				<div>Бесплатное размещение</div>
				<div>Все в одном месте</div>
				<div>Экономия времени на поиск</div>
				<div>Проверенные исполнители</div>
			</div>
		</Page>

	)
}

const Page = styled.div`
	.first-block {
		background-color: #7A3DD0;
	}

	.first-block .container {
		display: flex;
		padding: 0 250px;
		align-items: center;
	}

	.first-info {
		margin: 60px 0 150px;
	}

	.first-info h1 {
		font-size: 50px;
		line-height: 60px;
		color: #fff;
		max-width: 550px;
		margin: 0 0 20px;
	}

	.first-info .first-discr {
		font-size: 20px;
		max-width: 500px;
		color: #fff;
		margin-bottom: 60px;
	}

	.input-wrapper { 
		display: flex;
	}

	.input {
		border-radius: 5px 0px 0px 5px;
		border: none;
		padding: 10px 10px 10px 15px;
		font-size: 17px;
		color: rgb(0, 0, 0);
		font-weight: 600;
		flex: 6;
		outline: none;
		cursor: pointer;
	}

	.input-btn {
		background-color: rgb(255, 214, 0);
		padding: 15px;
		border-radius: 0 5px 5px 0;
		border: none;
		font-weight: bold;
		flex: 1;
		cursor: pointer;
	}

	.under-label {
		margin: 5px 0px 0px 15px ;
		font-size: 15px;
		color: #fff;
	}

	.second-block {
		display: flex;
		align-items: center;
		justify-content: space-around;
		background-color: #7A3DD0;
	}

	.second-block div {

		height: 65px;
	}
`

export default FirstBlock