import React, {Component} from 'react';
import Product from './Product';
import {Container, Row, Col, Navbar, Card, CardBody, CardText, CardTitle, CardImg, CardDeck} from 'reactstrap';

class Content extends Component {
    constructor(props){
        super(props);
        this.state = {
            searchTerm: '',
            filtered: false,
            products: [
                {
                    "id": 0,
                    "name": "Basic Bow",
                    "title": "Popular Products",
                    "image": "image/download.jpg",
                    "price": 5.00
                },
                {
                    "id": 1,
                    "name": "Unicorn Bow",
                    "title": "Latest Products",
                    "image": "/image/images.jpg",
                    "price": 5.00
                },
                {
                    "id": 2,
                    "name": "Santa Bow",
                    "title": "Seasonal Products",
                    "image": "/image/download (1).jpg",
                    "price": 5.00
                },
                {
                    "id": 3,
                    "name": "Mermaid Bow",
                    "title": "Popular Products",
                    "image": "/image/IMG_0722.jpg",
                    "price": 7.00
                },
                {
                    "id": 4,
                    "name": "Football Bow",
                    "title": "Latest Products",
                    "image": "/image/IMG_0724.jpg",
                    "price": 5.00
                },
                {
                    "id": 5,
                    "name": "Bunny Bow",
                    "title": "Seasonal Products",
                    "image": "/image/IMG_0729.jpg",
                    "price": 5.00
                },
                {
                    "id": 6,
                    "name": "Basic Bow",
                    "title": "Popular Products",
                    "image": "image/download.jpg",
                    "price": 5.00
                },
                {
                    "id": 7,
                    "name": "Unicorn Bow",
                    "title": "Latest Products",
                    "image": "/image/images.jpg",
                    "price": 5.00
                },
                {
                    "id": 8,
                    "name": "Santa Bow",
                    "title": "Seasonal Products",
                    "image": "/image/download (1).jpg",
                    "price": 5.00
                },
                {
                    "id": 9,
                    "name": "Mermaid Bow",
                    "title": "Popular Products",
                    "image": "/image/IMG_0722.jpg",
                    "price": 7.00
                },
                {
                    "id": 10,
                    "name": "Football Bow",
                    "title": "Latest Products",
                    "image": "/image/IMG_0724.jpg",
                    "price": 5.00
                },
                {
                    "id": 11,
                    "name": "Bunny Bow",
                    "title": "Seasonal Products",
                    "image": "/image/IMG_0729.jpg",
                    "price": 5.00
                },
                
            ],
            productsFiltered: [],
            activeCard: undefined
        }
        this.handleChange = this.handleChange.bind(this);
        this.viewProduct = this.viewProduct.bind(this);
    }

    handleChange(e) {
        
        const products = this.state.products.filter(prod => {
            const rx = new RegExp(e.target.value);
            return prod.name.toLowerCase().match(rx);
        });

        this.setState({
            searchTerm: e.target.value,
            filtered: true,
            productsFiltered: products
        });


      }

    viewProduct(product){
        this.setState({activeCard: product});
    }

    render(){
        return(
            <React.Fragment>
                <DisplayCategories cards={{
                    "products": [
                        {
                            "id": 0,
                            "name": "Basic Bow",
                            "title": "Popular Products",
                            "image": "image/download.jpg",
                            "price": 5.00
                        },
                        {
                            "id": 1,
                            "name": "Unicorn Bow",
                            "title": "Latest Products",
                            "image": "/image/images.jpg",
                            "price": 5.00
                        },
                        {
                            "id": 2,
                            "name": "Santa Bow",
                            "title": "Seasonal Products",
                            "image": "/image/download (1).jpg",
                            "price": 5.00
                        },
                        {
                            "id": 3,
                            "name": "Mermaid Bow",
                            "title": "Popular Products",
                            "image": "/image/IMG_0722.jpg",
                            "price": 7.00
                        },
                        {
                            "id": 4,
                            "name": "Football Bow",
                            "title": "Latest Products",
                            "image": "/image/IMG_0724.jpg",
                            "price": 5.00
                        },
                        {
                            "id": 5,
                            "name": "Bunny Bow",
                            "title": "Seasonal Products",
                            "image": "/image/IMG_0729.jpg",
                            "price": 5.00
                        },
                        

                    ]
                }}/>
                <Row className="rowContent">
                    <Col>
                        <form className="search-form" onSubmit={this.handleSearch}>
                            <input className="search-bar" type="text" value={this.state.searchTerm} onChange={this.handleChange}></input>
                        </form>
                    </Col>
                </Row>
                <DisplayProducts cards={this.state.filtered ? this.state.productsFiltered : this.state.products} viewProduct={this.viewProduct} activeCard={this.state.activeCard}/>
            </React.Fragment>
        );
    }
}


function DisplayCategories(props){

    const cards = props.cards.products.map((product, index) => {
        return (index > 2 ? <CategoryCard product={product}/> : undefined);
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

function DisplayProducts(props){
    const cards = props.cards.map((product, index) => {
        if(props.activeCard) {
            if(product.id == props.activeCard.id){
                return(<Product data={props.activeCard}/>)
            }
        }
        
        return (<ProductCard product={product} viewProduct={props.viewProduct} />);
    });
    const cardsPerDeck = 5;
    const decks = new Array(Math.ceil(cards.length/cardsPerDeck)).fill().map(row => {
        return (
            <Row className="rowContent">
                <Col>
                    <CardDeck>
                        {cards.splice(0, cardsPerDeck)}
                    </CardDeck>
                </Col>
            </Row>
        );
    });

    return (
        <React.Fragment>
            {decks}
        </React.Fragment>
    )
}

function CategoryCard({product}){
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

function ProductCard(props){
    const product = props.product;

    return (
        <Card className="cardProduct" key={product.id} onClick={() => props.viewProduct(product)}>
            <CardImg top src={product.image} />
            <CardBody>
                <CardTitle><h4>{product.name}</h4></CardTitle>
                <CardText><b>${product.price}</b></CardText>
            </CardBody>
        </Card>
    )
}




export default Content;