import './custom.scss';
import './Navbar.css';
import SearchBar from '../SearchBar';

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
						<a className='navbar-brand' href='#'>
							The Cocktail NavBar
						</a>
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