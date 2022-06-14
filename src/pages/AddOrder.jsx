import React, { useState } from 'react'
import { useTitle } from '../utils/useTitle';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { pushOrders } from '../redux/order/order';

export default function AddOrder() {

	const [datas, setData] = useState([])
	const dispatch = useDispatch()
	const { register, handleSubmit } = useForm();
	const onSubmit = data => () => dispatch(pushOrders(data));
	console.log(datas);
	useTitle('Добавить заказ')

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<input type="text" placeholder="Название" {...register("author", { required: true, maxLength: 80 })} />
			<input type="text" placeholder="Количество" {...register("qty", { required: true })} />
			<input type="number" placeholder="Цена" {...register("price", { required: true })} />
			<input type="date" placeholder="Дата" {...register("leadtime", { required: true })} />
			<select {...register("flags")}>
				<option value="female">быстро</option>
				<option value="male">медь</option>
				<option value="other">18X15</option>
			</select>
			<input type="submit" />
		</form>
	);
}
