import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { companiesReducer } from '../redux/companies/companies';
import { useTitle } from '../utils/useTitle';

function Companies() {
	useTitle('Companies');

	const { companies } = useSelector((state) => state.companies)
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(companiesReducer())
	}, [dispatch])

	return (
		<div className='page'>
			Companies
		</div>
	)
}

export default Companies