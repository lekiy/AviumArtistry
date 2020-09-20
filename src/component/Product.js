
import React, {Component} from 'react';
import { Row, Col, Button} from 'reactstrap';

class Product extends Component {
    constructor(props){
        super(props);

        this.state = {
            data: this.props.data
        }
    }

    render(){
        const {name, title, id, image, price} = this.props.data;

        return (
            <Row className="row-product">
                <Col>
                    <img src={image}></img>
                </Col>
                <Col>
                    <Row>
                        <h3>{name}</h3>
                    </Row>
                    <Row>
                        <p>{title}</p>
                    </Row>
                    <Row>
                        <Col>
                            <b>${price}</b>
                        </Col>
                        <Col>
                            <Button variant="add-cart">
                                <i>V</i>
                            </Button>
                        </Col>
                    </Row>
                </Col>
            </Row>
        );
    }

}

export default Product;