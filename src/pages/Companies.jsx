import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { companiesReducer } from '../redux/companies/companies';
import { useTitle } from '../utils/useTitle';

import Company from '../components/Company';

function Companies() {
	useTitle('Companies');


	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(companiesReducer())
	}, [dispatch])


	return (
		<div className='page'>
			<Company />
		</div>
	)
}

export default Companies