import React from "react";
import { useLoaderData, useParams, useNavigate } from "react-router-dom";
import Card from 'react-bootstrap/Card';
import './SingleDrink.css'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';
import Container from "react-bootstrap/esm/Container";

export default function SingleDrink(props) {
    const drink = useLoaderData();
    console.log("drink", drink);

    const arr = [];
    for(let n=1; n<16; n++){
        let ind='strIngredient'+n;
        let ind2= 'strMeasure'+n;
    
        arr.push(drink[ind] ? drink[ind2] + drink[ind] : "");
    }

    return (
        // todo, fix the UI for the single drink card :)
        <Container fluid="lg" className='d-flex justify-content-center'>
            <Card className='bigcard '>
                <Row>
                <Col>
                <Card.Body>
                    <Card.Title className="bigcard">{drink.strDrink}</Card.Title>
                    <Card.Text className="bigcard">
                        {drink.strInstructions}
                    </Card.Text>
                </Card.Body>
                <ListGroup className="bigcard" variant='flush'>
                    <ListGroup.Item>Ingredients</ListGroup.Item>
                    
                    {arr.map((ingr)=> ingr ? <ListGroup.Item>{ingr}{}</ListGroup.Item> : <></>)}
                    
                </ListGroup>
                </Col>

                <Col >
                <Card.Img src={drink.strDrinkThumb} className="w-100 h-100 bg-contain" ></Card.Img>
                </Col>
                </Row>
            </Card>
        </Container>
    );
}


// {drink.strAlcoholic}


// {drink.strCategory}


// {drink.strGlass}    

// {drink.strInstructions}