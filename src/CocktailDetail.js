import React from "react";
import { useLoaderData, useParams, useNavigate } from "react-router-dom";
import Card from 'react-bootstrap/Card';

export default function CocktailDetail(props) {
    const drink = useLoaderData();
    return (
        <div>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={drink.strDrinkThumb} />
                <Card.Body>
                    <Card.Title>{drink.strDrink}</Card.Title>
                    <Card.Text>
                        {drink.strInstructions}
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    );
}