import './custom.scss';
import './Navbar.css';
import SearchBar from './SearchBar';

export default function Navbar() {
	return (
		<nav className='navbar bg-secondary'>
			<div className='container-fluid'>
				<a className='navbar-brand' href='#'>
					<img
						src='/docs/5.3/assets/brand/bootstrap-logo.svg'
						alt='Logo'
						width='40'
						height='30'
						className='d-inline-block align-text-top'
					/>
					The Cocktail NavBar
				</a>

				<SearchBar 
					variant={'outline-primary'}
					className={"searchbar-nav"}
				/>
			</div>
		</nav>
	);
}