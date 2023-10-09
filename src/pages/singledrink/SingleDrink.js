import React, {useEffect} from 'react';
import {useLoaderData, useParams, useNavigate} from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import {useDispatch} from 'react-redux';
import {addRecent} from '../../utils/recentSlice';

function SingleDrink() {
	const drink = useLoaderData();
	//console.log('drink', drink);

	const dispatchRecent = useDispatch();

	useEffect(() => {
		// Adds two of each selected since we're in server dev mode
		let add = true;
		if (add) {
			add = false;
			dispatchRecent(addRecent(drink));
		}
		return () => (add = false);
	}, []);

	return (
		// todo, fix the UI for the single drink card :)
		<div className='d-flex justify-content-center'>
			<Card style={{width: '28rem'}}>
				<Card.Img variant='right' src={drink.strDrinkThumb} />
				<Card.Body>
					<Card.Title>{drink.strDrink}</Card.Title>
					<Card.Text>{/*  */}</Card.Text>
				</Card.Body>
			</Card>
		</div>
	);
}

export default SingleDrink;

// {drink.strAlcoholic}

// {drink.strCategory}

// {drink.strGlass}

// {drink.strInstructions}
