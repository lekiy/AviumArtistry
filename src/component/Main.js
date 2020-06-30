import React, {Component} from 'react';
import {Switch, Route, Redirect, withRouter} from 'react-router-dom';
import {Container} from 'reactstrap';
import Content from './Content';
import Contact from './Contact';
import About from './About';
import Header from './Header';
import Footer from './Footer';

class Main extends Component {
    constructor(props){
        super(props);
    }

    render(){
        return (
            <div>
                <Header />
                <div className="background-img">
                    <div className="background-gradient">
                        <Container>
                            <Switch>
                                <Route path='/home' render={() => <Content />} />
                                <Route path='/about' render={() => <About />} />
                                <Route path='/contact' render={() => <Contact />} />
                                <Redirect to='/home' />
                            </Switch> 
                        </Container>
                    </div>
                </div>
                <Footer />
            </div>
        );
    }
}

export default withRouter(Main);