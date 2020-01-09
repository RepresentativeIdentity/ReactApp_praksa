import * as React from 'react';
import { IVrstaStudija } from './store/state';
import { getVrstaStudija } from '../../api/api';

import { Card, Container, Row, Col } from 'reactstrap';
import LoadingScreen from 'react-loading-screen';

class VrstaStudija extends React.Component<IVrstaStudija, any> {

    async componentDidMount() {
        if (!this.state.studij) {
            this.Studij();
        }
    }

    state = {
        studij: this.props.vrstaStudija
    }

    async Studij() {
        let res = await getVrstaStudija();
        // setTimeout(async function () {
        //     this.setState({
        //         studij: res
        //     })
        // }.bind(this), 1000);

        this.setState({
            studij: res
        })
    }



    render() {

        if (!this.state.studij) {
            return (
                // tslint:disable-next-line:jsx-self-close
                <LoadingScreen
                    loading={true}
                    bgColor='#f1f1f1'
                    spinnerColor='#262626'
                    textColor='#676767'
                    logoSrc=''
                    text='Loading'
                >Loading</LoadingScreen>
            );
        }
        return (
            <Container style={CardContext}>
                <Card>
                    {/* <Row>
                        <Col style={{ textAlign: 'start', marginLeft: '2%', fontWeight: 'bold' }}>Name of Study: {this.state.studij.vrstaStudijaNaziv}</Col>
                    </Row>
                    <Row>
                        <Col style={{ textAlign: 'start', marginLeft: '2%', fontWeight: 'bold' }}>Study Level: {this.state.studij.vrstaStudijaRazina}</Col>
                    </Row>
                    <Row>
                        <Col style={{ textAlign: 'start', marginLeft: '2%', fontWeight: 'bold' }}>Study program type: {this.state.studij.tipStudijskogPrograma}</Col>
                    </Row> */}


                    {/* <Row>
                        <Col style={{ textAlign: 'start', marginLeft: '2%', fontWeight: 'bold' }}>Name of Study: Preddiplomski sveučilišni studij</Col>
                    </Row>
                    <Row>
                        <Col style={{ textAlign: 'start', marginLeft: '2%', fontWeight: 'bold' }}>Study Level: 3</Col>
                    </Row>
                    <Row>
                        <Col style={{ textAlign: 'start', marginLeft: '2%', fontWeight: 'bold' }}>Study program type: Sveučilišni</Col>
                    </Row>
                    <Row>
                        <Col style={{ textAlign: 'start', marginLeft: '2%', fontWeight: 'bold' }}>Faculty: Prirodnoslovno - matematički fakultet</Col>
                    </Row>
                    <Row>
                        <Col style={{ textAlign: 'start', marginLeft: '2%', fontWeight: 'bold' }}>Study: Geofizika</Col>
                    </Row>
                    <Row>
                        <Col style={{ textAlign: 'start', marginLeft: '2%', fontWeight: 'bold' }}>City: Zagreb</Col>
                    </Row> */}


                    <Row>
                        <Col style={{ textAlign: 'start', marginLeft: '2%', fontWeight: 'bold', color: 'black'  }}>Name of Study: <span style={{fontWeight: 'normal'}}>Preddiplomski sveučilišni studij</span></Col>
                    </Row>
                    <Row>
                        <Col style={{ textAlign: 'start', marginLeft: '2%', fontWeight: 'bold', color: 'black'  }}>Study Level: <span style={{fontWeight: 'normal'}}>3</span></Col>
                    </Row>
                    <Row>
                        <Col style={{ textAlign: 'start', marginLeft: '2%', fontWeight: 'bold', color: 'black'  }}>Study program type: <span style={{fontWeight: 'normal'}}>Sveučilišni</span></Col>
                    </Row>
                    <Row>
                        <Col style={{ textAlign: 'start', marginLeft: '2%', fontWeight: 'bold', color: 'black'  }}>Faculty: <span style={{fontWeight: 'normal'}}>Prirodnoslovno - matematički fakultet</span></Col>
                    </Row>
                    <Row>
                        <Col style={{ textAlign: 'start', marginLeft: '2%', fontWeight: 'bold', color: 'black'  }}>Study: <span style={{fontWeight: 'normal'}}>Geofizika</span></Col>
                    </Row>
                    <Row>
                        <Col style={{ textAlign: 'start', marginLeft: '2%', fontWeight: 'bold', color: 'black'  }}>City: <span style={{fontWeight: 'normal'}}>Zagreb</span></Col>
                    </Row>
                </Card>
            </Container>
        );
    }
}


export default VrstaStudija;



const CardContext = {
    marginTop: '3%',
    borderRadius: '4%',
}
