import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';

import { orderReducer } from '../redux/order/order';

import Table from '../components/Table';
import { useTitle } from '../utils/useTitle';


function Orders() {

	useTitle('Заказы');

	const { posts } = useSelector((state) => state.post)
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(orderReducer())
	}, [])


	const headers = [
		{ id: 1, text: "Номер" },
		{ id: 2, text: "Инфо" },
		{ id: 3, text: "Кол-во" },
		{ id: 5, text: "Цена" },
		{ id: 6, text: "Дата" },
		{ id: 7, text: "Особенности" },
		{ id: 8, text: "" }
	];


	return (
		<div className='page'>
			<Table title="Заказы" headers={headers} orders={posts} />
		</div>
	)
}

export default Orders