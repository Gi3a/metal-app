import React from 'react'

import '../assets/styles/pages/Home.css'
import Search from '../components/Search'

import { useTitle } from '../utils/useTitle';

function Home() {

	useTitle('Home');

	return (
		<div className='page'>
			<Search />
		</div>
	)
}

export default Home
