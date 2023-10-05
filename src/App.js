import './App.css';
import Navbar from './Navbar';
import {Outlet} from 'react-router-dom';
import Footer from './Footer';

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
