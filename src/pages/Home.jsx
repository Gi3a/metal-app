import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import '../assets/styles/pages/Home.css'
import Modal from '../components/Modal';
import Search from '../components/Search'
import { orderReducer } from '../redux/order/order';

import { useTitle } from '../utils/useTitle';


function Home() {
	const { posts } = useSelector((state) => state.post)
	const dispatch = useDispatch();
	console.log(posts)
	useEffect(() => {
		dispatch(orderReducer())
	}, [])


	useTitle('Home');
	const modalSelector = useSelector((state) => state.modal.modalState)
	return (
		<div className='page'>
			<Search />
			{modalSelector ? <Modal /> : ''}
			{/* <Table /> */}
		</div>
	)
}

export default Home
