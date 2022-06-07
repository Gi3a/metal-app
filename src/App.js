import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Error from './pages/Error';

import './assets/styles/index.css';
import MainLayout from './layouts/MainLayout';

function App() {
	return (
		<Routes>
			<Route path="/" element={<MainLayout />}>
				<Route path="" element={<Home />} />
				<Route path="*" element={<Error />} />
			</Route>
		</Routes>
	);
}

export default App;