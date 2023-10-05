import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import fetchSearch from './fetchSearch';
import {useState} from 'react';

export default function SearchBar(props) {
    const [validated, setValidated] = useState(false);
	const [searchQuery, setSearchQuery] = useState('');

	return (
		<form
            noValidate
            validated={true}
            onSubmit={(event) => {
                setValidated(true);
                console.log('inuti search bar');
                if (!searchQuery) {
                    // Set isInvalid to true when searchQuery is empty
                    setSearchQuery('');
                    return;
                  }
                fetchSearch(event, setValidated, searchQuery);
                
                }
            }
        >
			<InputGroup className={props.className}>
				<Form.Control
					type='text'
					placeholder='Search drink...'
					aria-label='Search drink...'
					aria-describedby='basic-addon2'
					
                    onChange={({target: {value}}) => setSearchQuery(value)}
					value={searchQuery}
					required

				/>

                
                <Form.Control.Feedback type='invalid'>
					Please search for a drink.
				</Form.Control.Feedback>

				<Button variant={props.variant} id='button-addon2'>
					Search
				</Button>

			</InputGroup>
		</form>
	);
}