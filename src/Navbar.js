import './custom.scss';

export default function Navbar() {
	return (
		<nav className='navbar bg-white'>
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

				<form className='d-flex' role='search'>
					<input
						className='form-control me-2'
						type='search'
						placeholder='Find your cocktail'
						aria-label='Search'
					/>
					<button className='btn btn-primary' type='submit'>
						Search
					</button>
				</form>
			</div>
		</nav>
	);
}
