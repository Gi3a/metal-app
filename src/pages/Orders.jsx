import React from 'react'
import Table from '../components/Table';
import { useTitle } from '../utils/useTitle';

import order1 from '../assets/images/orders/home-order1.png';
import order2 from '../assets/images/orders/orders2.png';
import order3 from '../assets/images/orders/orders3.png';
import order4 from '../assets/images/orders/orders4.png';
import order5 from '../assets/images/orders/orders5.png';

function Orders() {

	useTitle('Заказы');

	const headers = [
		{ id: 1, text: "ID" },
		{ id: 2, text: "Part" },
		{ id: 3, text: "Qty" },
		{ id: 4, text: "Supplier" },
		{ id: 5, text: "Price" },
		{ id: 6, text: "Lead Time" },
		{ id: 7, text: "Status" },
		{ id: 8, text: "Flags" }
	];

	const orders = [
		{ id: 1, image: order1, title: "103-3004", author: "Алексей Мизинцев", qty: 314, supplier: "", price: 5000, lead_time: 9, status: "approved", flags: "on time" },
		{ id: 2, image: order2, title: "040-3244", author: "Георгий Павличенко", qty: 100231, supplier: "", price: 90000, lead_time: 50, status: "approved", flags: "on time" },
		{ id: 3, image: order3, title: "214-2122", author: "Алисса Коловонцева", qty: 500212, supplier: "", price: 1430000, lead_time: 362, status: "approved", flags: "on time" },
		{ id: 4, image: order4, title: "042-3122", author: "Михаил Крючкович", qty: 9348832, supplier: "", price: 1032421, lead_time: 1440, status: "approved", flags: "on time" },
		{ id: 5, image: order5, title: "103-0002", author: "Гизат Утеев", qty: 1000000, supplier: "", price: 5002334, lead_time: 500, status: "approved", flags: "on time" },
	]

	return (
		<div className='page'>
			<Table title="Заказы" headers={headers} orders={orders} />
		</div>
	)
}

export default Orders