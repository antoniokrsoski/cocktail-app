import './Home.css';
import Carousel from 'react-bootstrap/Carousel';
import Image from 'react-bootstrap/Image';
import CocktailList from '../../components/CocktailList';
import {useLoaderData} from 'react-router-dom';
import SearchBar from '../../components/SearchBar';
import RecentDrinks from '../../components/RecentDrinks';

export default function Home() {
	const drinks = useLoaderData();
	return (
		<>
			<div className='container-fluid'>
				<div className='row'>
					<div className='text-center'>
						<p className='title'>Welcome to The Cocktail Bar</p>
						<p className='text'>
							Welcome to The Cocktail Bar – Your Ultimate Mixology Destination!{' '}
							<br />
							Explore our world of exquisite cocktails, crafted just for you.
							Cheers to a memorable experience!
						</p>
					</div>
					<div className='d-flex justify-content-center'>
						<SearchBar className={'searchbar-home'} />
					</div>

					<div className='d-flex justify-content-center'>
						<CarouselSlide drinks={drinks} />
					</div>
				</div>
			</div>
			<div className='container-fluid'>
				<RecentDrinks />
				dsadfa-spin
				<CocktailList className='mt-20' />
			</div>
		</>
	);
}

function CarouselSlide(props) {
	return (
		<div className='carousel'>
			<Carousel slide={true} interval={2000}>
				{props.drinks.map((drink) => CarouselItem(drink))}
			</Carousel>
		</div>
	);
}

function CarouselItem(drink) {
	return (
		<Carousel.Item key={drink.idDrink}>
			<Image
				className='img-ratio'
				src={drink.strDrinkThumb}
				text='This is text'
			/>
			<Carousel.Caption>
				<h3 className='drink-title'>{drink.strDrink}</h3>
				<p className='drink-text'>
					{drink.strAlcoholic}, {drink.strCategory}, {drink.strGlass}
				</p>
			</Carousel.Caption>
		</Carousel.Item>
	);
}
