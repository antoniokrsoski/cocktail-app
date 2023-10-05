import React from "react";
import { useLoaderData, useParams, useNavigate } from "react-router-dom";
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import { useEffect } from "react";


export default function SearchResult() {
    const drinks = useLoaderData();
    const { searchQuery } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        let shouldNavigate = drinks.length === 1;
        if (shouldNavigate) {
            shouldNavigate = false;
            navigate(`/cocktail-details/${drinks[0].idDrink}`);
        }
        return () => shouldNavigate = false;
    }, []);


    return (
        <>
            <div>Search results: {searchQuery}</div>
            {drinks.length > 0 ? <Results drinks={drinks} /> : <div>No results</div>}
        </>
    );
}

function instructionToString(string) {
    const limit = 10;
    const toLong = string.split(" ").length > limit;
    if (toLong) {
        string = string.split(" ").slice(0, limit).join(" ") + "...";
    }
    return string;
}

function Results(props) {
    const drinks = props.drinks;
    return (
        <Container className='pt-4 mt-4 mb-4'>
            <div className='row'>
                {drinks.map((drink) => (
                    <div className='col-12 col-md-4' key={drink.idDrink}>
                        <Card className='mt-4 mb-4 m-2 w-4 '>
                            <Card.Img src={drink.strDrinkThumb} variant='top'></Card.Img>
                            <Card.Title
                                className='mt-3'
                                style={{ textAlign: 'left', paddingLeft: '10px' }}
                            >
                                {drink.strDrink}
                            </Card.Title>
                            <Card.Text
                                className='mt-3'
                                style={{ textAlign: 'left', paddingLeft: '10px' }}
                            >
                                {/* {drink.strAlcoholic + ", " + drink.strCategory + ", " + drink.strGlass} */}
                                {instructionToString(drink.strInstructions)}
                            </Card.Text>
                        </Card>
                    </div>
                ))}
            </div>
        </Container>
    );
}