import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Error from './pages/Error';

import './assets/styles/general.css';
import './assets/styles/app.css';
import './assets/styles/ui/form.css';
import './assets/styles/fonts.css';
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