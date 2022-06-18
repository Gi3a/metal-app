import React from 'react'
import { useForm } from 'react-hook-form';
import { useTitle } from '../utils/useTitle'

export default function AddCompany() {
	useTitle("Добавление компании")
	// const dispatch = useDispatch()
	const { register, handleSubmit } = useForm();
	const onSubmit = (data) => console.log(data);
	useTitle('Добавить заказ')

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<input type="file" placeholder="Ваш логотип" {...register("logo", { required: true })} />
			<input type="text" placeholder="Название компании" {...register("name", { required: true, maxLength: 80 })} />
			<input type="text" placeholder="Контактное лицо" {...register("contact-person", { required: true })} />
			<input type="phone" placeholder="Номер телефона" {...register("phone", { required: true })} />
			<input type="email" placeholder="Почта" {...register("email", { required: true })} />
			<input type="text" placeholder="Ваш сайт" {...register("website", { required: true })} />
			<input type="text" placeholder="ИНН" {...register("INN", { required: true })} />
			<input type="text" placeholder="Иформация о компании" {...register("description", { required: true, maxLength: 80 })} />
			<input type="file" placeholder="Примеры работ" {...register("photos", { required: true })} />
			<select {...register("flags")}>
				<option value="Токарные работы">Токарные работы</option>
				<option value="Фрезерные работы">Фрезерные работы</option>
				<option value="Гальваника">Гальваника</option>
			</select>
			<input type="text" placeholder="Адрес офиса" {...register("officeLocation ")} />
			<input type="text" placeholder="Адрес производства" {...register("manufLocation ")} />
			<input type="submit" />
		</form>
	);
}
