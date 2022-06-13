import React from 'react'

import Sort from './Sort';
import CompanyItem from './CompanyItem';

function Company({ companies }) {
	return (
		<div className="section companies">
			<h1>Компании</h1>
			<div className="companies_content">
				<div className="companies_sort">
					<Sort />
				</div>
				<div className="comapnies_list">
					{companies.map((company) => {
						return (
							<CompanyItem key={company.id} company={company} />
						);
					})}
				</div>
			</div>
		</div>
	)
}

export default Company