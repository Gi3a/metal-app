import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'

function OrderCard() {
	const [order, setOrder] = useState();
	const { id } = useParams()

	useEffect(() => {
		async function fetchOrders() {
			try {
				const { data } = await axios.get('https://626fe0b1c508beec488b64db.mockapi.io/items/' + id);
				setOrder(data)
			} catch (error) {
				alert('Ошибка при получении заказов')
			}
		}

		fetchOrders()
	}, [])

	if (!order) {
		return 'Загрузка...'
	}

	return (
		<div className='page'>
			<img src={order.image} alt="" />
			<span>{order.price}</span>
			<span>{order.qty}</span>
			<div>{order.author}</div>

		</div>
	)
}

export default OrderCard