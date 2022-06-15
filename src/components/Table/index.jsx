import React from 'react'
import TableItem from './TableItem'

import '../../assets/styles/components/Table.css';

function Table({ title, headers, orders }) {
	console.log(orders)

	return (
		<div className="section table">
			<h1>{title}</h1>
			<div className="container">
				<div className="table_top">
					{headers.map((header) => {
						return (
							<span key={header.id}>{header.text}</span>
						);
					})}
				</div>
				{orders.map((order) => {
					return (
						<TableItem key={order.id} order={order} />
					);
				})}
			</div>
		</div>
	)
}

export default Table