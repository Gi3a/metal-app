import React from 'react'
import { useTitle } from '../utils/useTitle';

function AddOrder() {
	useTitle('Добавить заказ');

	return (
		<div className="page">
			<form className="form form-classic">
				<h1>Добавление заказа</h1>
				<div className="form-control">
					<input type="text" placeholder="Название" name="title" />
				</div>
				<div className="form-control">
					<textarea placeholder="Описание" rows="10" cols="50" name="Описание">

					</textarea>
				</div>
				<div className="form-control">
					<input type="number" placeholder="Количество" name="qty" />
				</div>
				<div className="form-control">
					<input type="number" placeholder="Цена" name="price" />
				</div>
				<div className="form-control">
					<input type="date" placeholder="Дата" name="leadtime" />
				</div>
				<div className="form-control">
					<input type="text" placeholder="Флаги. Например: быстро, медь, 18х18" name="flags" />
				</div>
				<div className="form-control">
					<input type="file" placeholder="Добавить фото" name="image" />
				</div>
				<div className="form-control">
					<button>Добавить</button>
				</div>
			</form>
		</div>
	)
}

export default AddOrder