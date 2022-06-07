import React from 'react';
import { Outlet } from 'react-router-dom';


const MainLayout = () => {

	return (
		<>

			<main className="content">
				<Outlet />
			</main>
		</>
	);
};

export default MainLayout;