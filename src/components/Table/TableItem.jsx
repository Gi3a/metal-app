import React from 'react'
import { Link } from 'react-router-dom';

import '../../assets/styles/components/Table.css';

function TableItem({ order }) {
	return (
		<Link to={`/order/${order.id}`} className="table_item">
			<div>{order.id}</div>
			<div>
				{/* <img src={order.image} /> */}
				<div>{order.title} <br /> Created by {order.author}</div>
			</div>
			<div>{order.qty}</div>
			{/* <div>{order.supplier}</div> */}
			<div>{order.price}</div>
			<div>{order.leadtime} days</div>
			<div>{order.flags}</div>
			<div>
				<button>Откликнуться</button>
			</div>
		</Link>
	)
}

export default TableItem