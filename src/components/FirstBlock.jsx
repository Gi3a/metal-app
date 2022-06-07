import React from 'react'
import styled from 'styled-components'

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
					<div className='first-map'></div>
				</div>
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

	.input {
		width: 450px;
		border-radius: 5px 0 0 5px;
		border: none;
		padding: 10px;
		font-size: 17px;
		color: #000;
		font-weight: 600;
	}

	.input-btn {
		background-color: #FFD600;
		padding: 12px 0 11px;
		border: none;
	}
`

export default FirstBlock