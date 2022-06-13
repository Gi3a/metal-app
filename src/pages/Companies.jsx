import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { companiesReducer } from '../redux/companies/companies';
import { useTitle } from '../utils/useTitle';

import Company from '../components/Company';

function Companies() {
	useTitle('Companies');

	const { companies } = useSelector((state) => state.companies)
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(companiesReducer())
	}, [dispatch])
	console.log(companies)
	return (
		<div className='page'>
			<Company companies={companies} />
		</div>
	)
}

export default Companies