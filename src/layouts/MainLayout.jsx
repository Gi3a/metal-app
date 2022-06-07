import React from 'react';
import { Outlet } from 'react-router-dom';

import Header from '../components/Header';
import Headers from '../components/Headers';

const MainLayout = () => {

	return (
		<>
			<Header />
			<Headers />
			<main className="content">
				<Outlet />
			</main>
		</>
	);
};

export default MainLayout;