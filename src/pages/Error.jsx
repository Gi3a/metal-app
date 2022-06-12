import React from 'react'
import { useTitle } from '../utils/useTitle';

function Error() {

	useTitle('Error 404');

	return (
		<div className='page'>
			<h1>Error 404</h1>
		</div>
	)
}

export default Error