import React from 'react'
import { useTitle } from '../utils/useTitle';

function Error() {

	useTitle('Error 404');

	return (
		<div className='page'>
			Error 404
		</div>
	)
}

export default Error