import './custom.scss';
import './Navbar.css';
import SearchBar from './SearchBar';
import { Link } from 'react-router-dom';

export default function Navbar() {
	return (
		<nav className='navbar bg-secondary'>
			<div className='container-fluid'>
				<Link to="/" className='navbar-brand' href='#'>
					The Cocktail Bar
				</Link>

				<SearchBar
					variant={'outline-primary'}
					className={"searchbar-nav"}
				/>
			</div>
		</nav>
	);
}