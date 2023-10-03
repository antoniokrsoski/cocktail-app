import './Home.css';
import Carousel from 'react-bootstrap/Carousel';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import CocktailList from './CocktailList';
import { useLoaderData } from "react-router-dom";

export default function Home() {
	const drinks = useLoaderData();
	return (
		<>
			<div className='container-fluid'>
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
					
					<p className="text align-left">Recommended drinks</p>
					<div className="d-flex justify-content-center">
						<CarouselSlide drinks={drinks}/>
					</div>
				</div>
			</div>
			<div className="container-fluid">
				<CocktailList/>
			</div>
		</>
	);
}

function CarouselSlide(props) {
	return (
		<div className='carousel'>
			<Carousel slide={true} interval={2000}>
				{props.drinks.map(drink => CarouselItem(drink))}
			</Carousel>
		</div>
	);
}

function CarouselItem(drink) {
	return (
		<Carousel.Item key={drink.idDrink}>
			<Image className="img-ratio" src={drink.strDrinkThumb} text='This is text' />
			<Carousel.Caption>
				<h3 className='drink-title'>{drink.strDrink}</h3>
				<p className="drink-text">{drink.strAlcoholic}, {drink.strCategory}, {drink.strGlass}</p>
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

