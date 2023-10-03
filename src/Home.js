import './Home.css';
import Carousel from 'react-bootstrap/Carousel';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import CocktailList from './CocktailList';

export default function Home() {
	return (
		<div className='container'>
			<div className='row'>
				<div className='text-center'>
					<p className='title'>Welcome to The Cocktail Bar</p>
					<p className='text'>
						This is a subtitle, here is some more text just to fill out this
						little section so it looks kind of normal. This will include
						<br /> some cute description or welcome message or something on the
						main page.
					</p>
				</div>
				<div className="d-flex justify-content-center">
					<SearchBar />
				</div>
				<div className="d-flex justify-content-center">
					<CarouselSlide />
				</div>
			</div>
			<CocktailList/>
		</div>
	);
}

function CarouselSlide() {
	return (
		<div className='carousel'>
			<Carousel slide={false}>
				{CarouselItem(
					'https://www.thecocktaildb.com/images/media/drink/5noda61589575158.jpg'
				)}
				{CarouselItem(
					'https://www.thecocktaildb.com/images/media/drink/bry4qh1582751040.jpg'
				)}
				{CarouselItem(
					'https://www.thecocktaildb.com/images/media/drink/loezxn1504373874.jpg'
				)}
			</Carousel>
		</div>
	);
}

function CarouselItem(src) {
	// will take in a drink, from the drink wwe will extract the image, name and other cool stuff
	return (
		<Carousel.Item>
			<Image className="img-ratio" src={src} text='This is text' />
			<Carousel.Caption>
				{/* title will become drink name and p element will include either ingridients or something */}
				<h3>First slide label</h3>
				<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
			</Carousel.Caption>
		</Carousel.Item>
	);
}

function SearchBar() {
	return (
		<InputGroup className='searchbar-home'>
			<Form.Control
				type='text'
				placeholder="Search drink..."
				aria-label="Search drink..."
				aria-describedby='basic-addon2'
			/>
			<Button variant='outline-secondary' id='button-addon2'>
				Search
			</Button>
		</InputGroup>
	);
}
