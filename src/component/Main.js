import React, {Component} from 'react';
import {Switch, Route, Redirect, withRouter} from 'react-router-dom';
import {Container} from 'reactstrap';
import Content from './Content';
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
                            <Content />
                            <About />
                        </Container>
                    </div>
                </div>
                 {/* <Switch>
                    <Route exact path='/home' component={<Content />} />
                    <Route exact path='/about' component={<About />} />
                    <Redirect to='/home' />
                </Switch> */}
                
                <Footer />
            </div>
        );
    }
}

export default withRouter(Main);