import './App.css';
import {useState, useEffect} from 'react';
import Navbar from './Navbar';
import { Outlet } from 'react-router-dom';


function App() {

	return (
		<div className='App'>
			<Navbar/>
			<Outlet/>
		</div>
	);
}

export default App;
