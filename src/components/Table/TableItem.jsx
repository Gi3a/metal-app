import React from 'react'

import '../../assets/styles/components/Table.css';

function TableItem({ order }) {
	return (
		<div className="table_item">
			<div>{order.id}</div>
			<div>
				<img src={order.image} />
				<div>{order.title} <br /> Created by {order.author}</div>
			</div>
			<div>{order.qty}</div>
			{/* <div>{order.supplier}</div> */}
			<div>{order.price}</div>
			<div>{order.lead_time} days</div>
			<div>{order.flags}</div>
			<div>
				<button>Откликнуться</button>
			</div>
		</div>
	)
}

export default TableItem