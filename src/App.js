import './App.css';
import Navbar from './components/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from './components/Footer';

import ReduxTest from './ReduxTest';

import ReduxTest from './ReduxTest';

function App() {
	return (
		<div className='App overflow-x-hidden'>
			<Navbar />
			<Outlet />
			<Footer />
			<ReduxTest />
		</div>
	);
}

export default App;
