import Container from 'react-bootstrap/Container';

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
		<Container className='pt-4 mt-4 mb-4'>
			<div className='row'>
				{cards.map((card) => (
					<div className='col-12 col-md-4' key={card.title}>
						<Card className='mt-4 mb-4 m-2 w-4 '>
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
					</div>
				))}
			</div>
		</Container>
	);
}
