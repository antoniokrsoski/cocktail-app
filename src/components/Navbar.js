import './custom.scss';
import './Navbar.css';
import SearchBar from '../SearchBar';
import { Link } from 'react-router-dom';

export default function Navbar() {
	return (
		<nav className='navbar bg-secondary'>
			<div className='container-fluid'>
				<div className='row align-items-center'>
					<div className='col-auto'>	
						<img
							src='/drinklogo.png'
							alt='Logo'
							height='50'
							className='d-inline-block align-text-top'
						/>
					</div>

					<div className='col-auto'>
						<Link className='navbar-brand' to='/'>
							The Cocktail NavBar
						</Link>
					</div>
				</div>
				<SearchBar 
				variant={'outline-primary'}
				className={"searchbar-nav"}
				/>
			</div>
		</nav>
	);
}