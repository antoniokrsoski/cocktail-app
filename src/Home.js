import './Home.css';
import Carousel from 'react-bootstrap/Carousel';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

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
					<SearchBar />
					<CarouselSlide />
				</div>
			</div>
		</div>
	);
}

function CarouselSlide() {
	return (
		<div className='carousel'>
			<Carousel>
				{CarouselItem(
					'https://www.thecocktaildb.com/images/media/drink/5noda61589575158.jpg/preview'
				)}
				{CarouselItem(
					'https://www.thecocktaildb.com/images/media/drink/5noda61589575158.jpg/preview'
				)}
				{CarouselItem(
					'https://www.thecocktaildb.com/images/media/drink/5noda61589575158.jpg/preview'
				)}
			</Carousel>
		</div>
	);
}

function CarouselItem(src) {
	return (
		<Carousel.Item>
			<Image src={src} text='This is text' />
			<Carousel.Caption>
				<h3>First slide label</h3>
				<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
			</Carousel.Caption>
		</Carousel.Item>
	);
}

function SearchBar() {
	return (
		<InputGroup className='searchbar'>
			<Form.Control
				placeholder="Recipient's username"
				aria-label="Recipient's username"
				aria-describedby='basic-addon2'
			/>
			<Button variant='outline-secondary' id='button-addon2'>
				Button
			</Button>
		</InputGroup>
	);
}
