import * as React from 'react';
import { IStudent } from './store/state';
import { getStudent } from '../../api/api';
import {
    Card,
    Container, Row, Col
} from 'reactstrap';

import '../Css/StudentCard.css';

import { Redirect } from 'react-router-dom';
import { format } from 'date-fns';
import LoadingScreen from 'react-loading-screen';

class Student extends React.Component<IStudent, any> {

    async componentDidMount() {
        if (!this.state.student) {
            this.Student();
        }
    }
    

    state = {
        student: this.props.student
    }

    async Student() {
        let stud = await getStudent();
        // setTimeout(async function () {
        //     this.setState({
        //         student: stud
        //     })
        // }.bind(this), 1000);

        this.setState({
            student: stud
        })
    }


    renderProfileData() {
        if (!this.state.student) {
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
                <Row>
                        <Col style={{ textAlign: 'start', marginLeft: '2%', fontWeight: 'bold', color: 'black' }}>JMBAG: <span style={{fontWeight: 'normal'}}>{this.state.student.jmbag}</span></Col>
                    </Row>
                    <Row>
                        <Col style={{ textAlign: 'start', marginLeft: '2%', fontWeight: 'bold', color: 'black'  }}>First Name: <span style={{fontWeight: 'normal'}}>{this.state.student.ime}</span></Col>
                    </Row>
                    <Row>
                        <Col style={{ textAlign: 'start', marginLeft: '2%', fontWeight: 'bold', color: 'black' }}>Last Name: <span style={{fontWeight: 'normal'}}>{this.state.student.prezime}</span></Col>
                    </Row>
                    <Row>
                        <Col style={{ textAlign: 'start', marginLeft: '2%', fontWeight: 'bold', color: 'black' }}>Gender: <span style={{fontWeight: 'normal'}}>{this.state.student.spol}</span></Col>
                    </Row>
                    <Row>
                        <Col style={{ textAlign: 'start', marginLeft: '2%', fontWeight: 'bold', color: 'black' }}>Date of birth: <span style={{fontWeight: 'normal'}}>{format(this.state.student.rodenjeDatum, 'DD.MM.YYYY.')}</span></Col>
                    </Row>
                    <Row>
                        <Col style={{ textAlign: 'start', marginLeft: '2%', fontWeight: 'bold', color: 'black' }}>Parent's name: <span style={{fontWeight: 'normal'}}>{this.state.student.imeRoditelja}</span></Col>
                    </Row>
                    <Row>
                        <Col style={{ textAlign: 'start', marginLeft: '2%', fontWeight: 'bold', color: 'black' }}>Index number: <span style={{fontWeight: 'normal'}}>{this.state.student.brIndeksa}</span></Col>
                    </Row>
                    <Row>
                        <Col style={{ textAlign: 'start', marginLeft: '2%', fontWeight: 'bold', color: 'black' }}>Residence Postal Code: <span style={{fontWeight: 'normal'}}>{this.state.student.pbrMjestaRodenja}</span></Col>
                    </Row>
                    <Row>
                        <Col style={{ textAlign: 'start', marginLeft: '2%', fontWeight: 'bold', color: 'black' }}>Current Postal Code: <span style={{fontWeight: 'normal'}}>{this.state.student.pbrStanovanja}</span></Col>
                    </Row>
                    <Row>
                        <Col style={{ textAlign: 'start', marginLeft: '2%', fontWeight: 'bold', color: 'black' }}>Street: <span style={{fontWeight: 'normal'}}>{this.state.student.ulica} {this.state.student.kucniBroj}</span></Col>
                    </Row>
                    <Row>
                        <Col style={{ textAlign: 'start', marginLeft: '2%', fontWeight: 'bold', color: 'black' }}>Telephone: <span style={{fontWeight: 'normal'}}>{this.state.student.telefon}</span></Col>
                    </Row>
                    <Row>
                        <Col style={{ textAlign: 'start', marginLeft: '2%', fontWeight: 'bold', color: 'black' }}>Email: <span style={{fontWeight: 'normal'}}>{this.state.student.mail}</span></Col>
                    </Row>
                    <Row>
                        <Col style={{ textAlign: 'start', marginLeft: '2%', fontWeight: 'bold', color: 'black' }}>Year of study: <span style={{fontWeight: 'normal'}}>{this.state.student._GodinaStudija}</span></Col>
                    </Row>
                    <Row>
                        <Col style={{ textAlign: 'start', marginLeft: '2%', fontWeight: 'bold', color: 'black' }}>Student's right to: <span style={{fontWeight: 'normal'}}>{format(this.state.student.pravaDo_ISSP, 'MM.DD.YYYY.')}</span></Col>
                    </Row>
                    {/* <Row>
                        <Col style={{ textAlign: 'start', marginLeft: '2%', fontWeight: 'bold' }}>PIN: {this.state.student.oib}</Col>
                    </Row>
                    <Row>
                        <Col style={{ textAlign: 'start', marginLeft: '2%', fontWeight: 'bold' }}>JMBAG: {this.state.student.jmbag}</Col>
                    </Row>
                    <Row>
                        <Col style={{ textAlign: 'start', marginLeft: '2%', fontWeight: 'bold' }}>First Name: {this.state.student.ime}</Col>
                    </Row>
                    <Row>
                        <Col style={{ textAlign: 'start', marginLeft: '2%', fontWeight: 'bold' }}>Last Name: {this.state.student.prezime}</Col>
                    </Row>
                    <Row>
                        <Col style={{ textAlign: 'start', marginLeft: '2%', fontWeight: 'bold' }}>Gender: {this.state.student.spol}</Col>
                    </Row>
                    <Row>
                        <Col style={{ textAlign: 'start', marginLeft: '2%', fontWeight: 'bold' }}>Date of birth: {format(this.state.student.rodenjeDatum, 'DD.MM.YYYY.')}</Col>
                    </Row>
                    <Row>
                        <Col style={{ textAlign: 'start', marginLeft: '2%', fontWeight: 'bold' }}>Parent's name: {this.state.student.imeRoditelja}</Col>
                    </Row>
                    <Row>
                        <Col style={{ textAlign: 'start', marginLeft: '2%', fontWeight: 'bold' }}>Index number: {this.state.student.brIndeksa}</Col>
                    </Row>
                    <Row>
                        <Col style={{ textAlign: 'start', marginLeft: '2%', fontWeight: 'bold' }}>Residence Postal Code: {this.state.student.pbrMjestaRodenja}</Col>
                    </Row>
                    <Row>
                        <Col style={{ textAlign: 'start', marginLeft: '2%', fontWeight: 'bold' }}>Current Postal Code: {this.state.student.pbrStanovanja}</Col>
                    </Row>
                    <Row>
                        <Col style={{ textAlign: 'start', marginLeft: '2%', fontWeight: 'bold' }}>Street: {this.state.student.ulica} {this.state.student.kucniBroj}</Col>
                    </Row>
                    <Row>
                        <Col style={{ textAlign: 'start', marginLeft: '2%', fontWeight: 'bold' }}>Telephone: {this.state.student.telefon}</Col>
                    </Row>
                    <Row>
                        <Col style={{ textAlign: 'start', marginLeft: '2%', fontWeight: 'bold' }}>Email: {this.state.student.mail}</Col>
                    </Row>
                    <Row>
                        <Col style={{ textAlign: 'start', marginLeft: '2%', fontWeight: 'bold' }}>Year of study: {this.state.student._GodinaStudija}</Col>
                    </Row>
                    <Row>
                        <Col style={{ textAlign: 'start', marginLeft: '2%', fontWeight: 'bold' }}>Student's right to: {format(this.state.student.pravaDo_ISSP, 'MM.DD.YYYY.')}</Col>
                    </Row> */}
                </Card>
            </Container>
        );
    }

    // Main render
    render() {
        // console.log(this.props.student);
        if (this.props.error) {
            return (
                <Redirect to='/Login' />
            );
        }

        // console.log(this.props.student);
        return (
            this.renderProfileData()
        );
    }
}


export default Student;


const CardContext = {
    marginTop: '3%',
    borderRadius: '4%',
    width: '100%',
}
