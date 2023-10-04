import './custom.scss';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import './Navbar.css';
import fetchSearch from './fetchSearch';

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

				<SearchBar />
			</div>
		</nav>
	);
}

function SearchBar() {
	return (
		<form>
			<InputGroup className='searchbar-nav'>
				<Form.Control
					type='text'
					placeholder='Search drink...'
					aria-label='Search drink...'
					aria-describedby='basic-addon2'
				/>
				<Button variant='outline-primary' id='button-addon2'>
					Search
				</Button>
			</InputGroup>
		</form>
	);
}
