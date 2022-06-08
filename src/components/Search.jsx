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
					<button type="button" class="py-2 px-4  bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
						Valider
					</button>
					{/* <button>
						<TbSearch />
						Найти исполнителя
					</button> */}
				</div>
			</div>
		</div>
	)
}

export default Search