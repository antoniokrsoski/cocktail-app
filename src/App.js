import './App.css';
import {useState, useEffect} from 'react';
import Navbar from './Navbar';
import {Outlet} from 'react-router-dom';
import Footer from './Footer';

function App() {
	return (
		<div className='App overflow-x-hidden'>
			<Navbar />
			<Outlet />
			<Footer />
		</div>
	);
}

export default App;
