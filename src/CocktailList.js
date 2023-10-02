import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export default function CocktailList() {
	const cards = [
		{
			title: 'Test 1',
			description: 'bläää',
			src: 'bla',
		},
		{title: 'Test 2', description: 'bläää', src: 'bla'},
		{title: 'Test 3', description: 'bläää', src: 'bla'},
	];
	return (
		<Container className='pt-4'>
			<div className='d-flex flex-row justify-content-center'>
				{cards.map((card) => (
					<Card className='m-2 w-33' key={card.title} style={{width: '18rem'}}>
						<Card.Img src={card.src} variant='top'></Card.Img>
						<Card.Title>{card.title}</Card.Title>
						<Card.Text>{card.description}</Card.Text>
					</Card>
				))}
			</div>
		</Container>
	);
}
