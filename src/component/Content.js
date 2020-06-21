import React, {Component} from 'react';
import {Container, Row, Col, Navbar, Card, CardBody, CardText, CardTitle, CardImg, CardDeck} from 'reactstrap';

class Content extends Component {
    constructor(props){
        super(props);
        this.state = {
            
        }
    }

    render(){
        return(
            
            <ProductDisplay cards={{
                "products": [
                    {
                        "id": 0,
                        "name": "Basic Hairbow",
                        "title": "Popular Products",
                        "image": "image/download.jpg",
                        "price": 5.00
                    },
                    {
                        "id": 1,
                        "name": "Unicorn Hairbow",
                        "title": "Latest Products",
                        "image": "/image/images.jpg",
                        "price": 5.00
                    },
                    {
                        "id": 2,
                        "name": "Santa Hairbow",
                        "title": "Seasonal Products",
                        "image": "/image/download (1).jpg",
                        "price": 5.00
                    }
                ]
            }}/>
        );
    }
}

function ProductDisplay(props){

    const cards = props.cards.products.map(product => {
        return (<ProductCard product={product}/>);
    });

    return (
        <Row className="rowContent">
            <Col>
                <CardDeck>
                    {cards}
                </CardDeck>
            </Col>
        </Row>
    )
}

function ProductCard({product}){
    return (
        <Card key={product.id}>
            <CardImg top src={product.image} />
            <CardBody>
                <CardTitle><h4>{product.title}</h4></CardTitle>
                <CardText>{product.name}</CardText>
            </CardBody>
        </Card>
    )
    
}

export default Content;