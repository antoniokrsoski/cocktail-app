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
			src: 'https://www.thecocktaildb.com/images/media/drink/5noda61589575158.jpg/preview',
		},
		{
			title: 'Test 2',
			description: 'bläää',
			src: 'https://www.thecocktaildb.com/images/media/drink/5noda61589575158.jpg/preview',
		},
		{
			title: 'Test 3',
			description: 'bläää',
			src: 'https://www.thecocktaildb.com/images/media/drink/5noda61589575158.jpg/preview',
		},
		{
			title: 'Test 4',
			description: 'bläää',
			src: 'https://www.thecocktaildb.com/images/media/drink/5noda61589575158.jpg/preview',
		},
		{
			title: 'Test 5',
			description: 'bläää',
			src: 'https://www.thecocktaildb.com/images/media/drink/5noda61589575158.jpg/preview',
		},
		{
			title: 'Test 6',
			description: 'bläää',
			src: 'https://www.thecocktaildb.com/images/media/drink/5noda61589575158.jpg/preview',
		},
	];
	return (
		<Container className='pt-4 mt-4'>
			<div className='d-flex flex-wrap flex-row w-100'>
				{cards.map((card) => (
					<Card className='m-2 w-50' key={card.title} style={{width: '18rem'}}>
						<Card.Img src={card.src} variant='top'></Card.Img>
						<Card.Title
							className='mt-3'
							style={{textAlign: 'left', paddingLeft: '10px'}}
						>
							{card.title}
						</Card.Title>
						<Card.Text
							className='mt-3'
							style={{textAlign: 'left', paddingLeft: '10px'}}
						>
							{card.description}
						</Card.Text>
					</Card>
				))}
			</div>
		</Container>
	);
}
