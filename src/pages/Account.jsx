import React from 'react'
import { useTitle } from '../utils/useTitle';

function Account() {
	useTitle('Account');

	return (
		<div className='page'>
			Account
		</div>
	)
}

export default Account