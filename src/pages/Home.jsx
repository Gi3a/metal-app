import React, { useEffect } from 'react'

import { useSelector, useDispatch } from 'react-redux';
import { orderReducer } from '../redux/order/order';

import Table from '../components/Table';

import '../assets/styles/pages/Home.css'
import Modal from '../components/Modal';
import Search from '../components/Search'

import { useTitle } from '../utils/useTitle';


function Home() {

	useTitle('Home');

	const { posts } = useSelector((state) => state.post)
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(orderReducer())
	}, [dispatch])

	const headers = [
		{ id: 1, text: "Номер" },
		{ id: 2, text: "Инфо" },
		{ id: 3, text: "Кол-во" },
		{ id: 5, text: "Цена" },
		{ id: 6, text: "Дата" },
		{ id: 7, text: "Особенности" },
		{ id: 8, text: "" }
	];
	const modalSelector = useSelector((state) => state.modal.modalState)
	return (
		<div className='page'>
			<Search />
			{modalSelector ? <Modal /> : ''}
			<Table title="Последние заказы" headers={headers} orders={posts} />
		</div>
	)
}

export default Home
