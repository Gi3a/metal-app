import React from 'react'

import '../../assets/styles/components/Company.css';

function CompanyItem({ company }) {

	console.log(company)

	return (
		<div className="company">
			<div className="img_logotype"><img src={company.image_logotype} /></div>
			<div>Название: {company.title} [{company.inn}]</div>
			<div>Владелец: {company.creater}</div>
			<div>Описание: {company.description}</div>
			<div>Производство: {company.manufacture}</div>
			<div>Офис: {company.office}</div>
			<div>Установок: {company.machines}</div>
			<div>Сотрудинокв: {company.employees}</div>
			<div>Опыт: {company.experience} дней</div>
			<div>Площаль: {company.area} м2</div>
			<div className="img_collection">
				<img src={company.image_area} />
				<img src={company.image_machines} />
				<img src={company.image_employees} />
			</div>
			<div className="img_collection">
				<img src={company.image_portfolio_1} />
				<img src={company.image_portfolio_2} />
				<img src={company.image_portfolio_3} />
				<img src={company.image_portfolio_4} />
			</div>
		</div>
	)
}

export default CompanyItem