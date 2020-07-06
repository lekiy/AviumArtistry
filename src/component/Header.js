
import React, {Component} from 'react';
import {Jumbotron, Container, Row, Col, Navbar, Nav, NavItem, Button} from 'reactstrap';
import {NavLink} from 'react-router-dom';


class Header extends Component {
    constructor(props){
        super(props);
        this.state = {
            logoSize: 13,
            logoOffset: -10,
            logoBorder: 5
        }

        this.handleScroll = this.handleScroll.bind(this);
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    }
    
    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }


    // This event resizes the logo in the navbar to follow the scrolling of the page.
    handleScroll = (event) => {
        const jumboH = document.getElementById("title").offsetHeight;
        let scrollH = window.scrollY;
        const logoSize = 13;
        const logoOffset = -10;
        const borderSize = 5;

        if(scrollH > jumboH ) scrollH = jumboH;
        let percent = Math.abs(scrollH-jumboH) / jumboH;

        // if(percent > 1 ) percent = 1;
        // console.log(percent);

        const logoMin = 6;
        this.setState({
            logoSize: logoSize*(percent) < logoMin ? logoMin : logoSize*(percent),
            logoOffset: logoOffset*percent,
            logoBorder: borderSize*percent
        })
    }

    render(){
        return (
            <React.Fragment>
                <Jumbotron fluid id="title">
                    <Container>
                        <Row>
                            <Col className="brand">Avium</Col>
                            <Col></Col>
                            <Col className="brand">Artistry</Col>
                        </Row>
                    </Container>
                </Jumbotron>

                <Navbar light className="navbar-expand-sm sticky-top">
                    <Nav navbar id="navbar-layout">
                        <NavItem>
                            {/* <!-- Filler --> */}
                        </NavItem>
                        <NavItem>
                            <NavLink className="nav-link" to="/about">About</NavLink>
                        </NavItem>
                        <NavItem>
                           <NavLink className="nav-link" to="/contact">Contact Us</NavLink>
                        </NavItem>
                        <NavItem className="nav-item active">
                            {/* <NavLink className="nav-logo" to="/home"> */}
                                <img id="logo" src="/image/cherryblossomtreelogo.svg" style={{border: `${this.state.logoBorder} px solid rgb(255, 236, 246)`, width:`${this.state.logoSize}rem`, top:`${this.state.logoOffset}rem`}}/>
                            {/* </NavLink> */}
                        </NavItem>
                        <NavItem>
                            <NavLink className="nav-link" to="/products">Products</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className="nav-link" to="/orders">Orders</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink  className="nav-link" to="/cart"><i className="fa fa-shopping-basket"></i></NavLink>
                        </NavItem>
                    </Nav>
                </Navbar>
            </React.Fragment>

        )
    }
}

export default Header;