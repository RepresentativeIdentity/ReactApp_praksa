import * as React from 'react';
import './App.css';

import { BrowserRouter as Router, Route } from 'react-router-dom';
import NavBar from './Components/NavBar/NavBar';

import Dashboard from './Components/Dashboard/Dashboard';
import {
    Container, Row, Col
} from 'reactstrap';

import ProfilePage from './Components/Profile/Profile';
import VrstaStudijaPage from './Components/VrstaStudija/VrstaStudija';
import MolbaPage from './Components/Molba/Molba';


class MainApp extends React.Component {


    public render() {
        return (
            <div className="App">
                <Router>
                    <div>
                        <NavBar />
                        <Container >
                            <Row className="bodyContainer">
                                <Col sm='3'xs='12' style={{width: '100%', padding: 0, margin: 0}}>
                                    <Dashboard />
                                </Col>
                                <Col sm='9'xs='12' style={{width: '100%', padding: 0, margin: 0}}>
                                    <Route path='/student/profile' component={ProfilePage} />
                                    <Route path="/student/studyType" component={VrstaStudijaPage} />
                                    <Route path='/student/request' component={MolbaPage} />
                                </Col>
                            </Row>
                        </Container>
                    </div>
                </Router>
            </div>
        );
    }
}



export default MainApp;
