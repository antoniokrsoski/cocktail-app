import React from "react";
import { useLoaderData, useParams, useNavigate } from "react-router-dom";
import Card from 'react-bootstrap/Card';

export default function SingleDrink(props) {
    const drink = useLoaderData();
    console.log("drink", drink);
    return (
        // todo, fix the UI for the single drink card :)
        <div>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={drink.strDrinkThumb} />
                <Card.Body>
                    <Card.Title>{drink.strDrink}</Card.Title>
                    <Card.Text>
                        {/*  */}
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    );
}


// {drink.strAlcoholic}


// {drink.strCategory}


// {drink.strGlass}    

// {drink.strInstructions}