import React from 'react'
import { useSelector } from 'react-redux';

import '../assets/styles/pages/Home.css'
import Modal from '../components/Modal';
import Search from '../components/Search'

import { useTitle } from '../utils/useTitle';


function Home() {

	useTitle('Home');
	const modalState = useSelector(state => state.setState)

	console.log(modalState)

	return (
		<div className='page'>
			<Search />
			{modalState ? <Modal /> : ''}
		</div>
	)
}

export default Home
