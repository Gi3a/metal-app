import React from 'react'

import { TbSearch } from 'react-icons/tb';
import '../assets/styles/components/Search.css';

function Search() {
	return (
		<div className="section search">
			<div className="container">
				<h1>Найдите исполнителя любой услуги металлообработки!</h1>
				<span>Свяжитесь напрямую с лучшими проверенными поставщиками-производителями.</span>
				<span>Переходите от проектирования к детали быстрее и по оптимальной цене.</span>
				<div className="form-control">
					<input placeholder="Что нужно сделать? Например: круговое шлифование" />
					<button>
						<TbSearch />
						Найти исполнителя
					</button>
				</div>
			</div>
		</div>
	)
}

export default Search