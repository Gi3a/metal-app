import React from 'react'
import { useTitle } from '../utils/useTitle';

function AddOrder() {
	useTitle('Добавить заказ');

	return (
		<div className="page">
			<form className="form-classic">
				<h1>Добавление заказа</h1>
				<div className="form-control">
					<input type="text" placeholder="Название" />
				</div>
				<div className="form-control">
					<textarea placeholder="Описание" rows="10" cols="45"></textarea>
				</div>
				<div className="form-control">
					<button>Добавить</button>
				</div>
			</form>
		</div>
	)
}

export default AddOrder