import * as React from 'react';
import { IStudent } from './store/state';
import { getStudent } from '../../api/api';
import {
    Card, CardText, CardBody, CardTitle, CardSubtitle, Button,
} from 'reactstrap';

import avatar from '../../Assets/avatar.png';
import '../Css/StudentCard.css';

import { Route, withRouter } from 'react-router-dom';
// import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
// import { faPray, faPowerOff, faSchool } from '@fortawesome/free-solid-svg-icons'
// import { LoginConsumer } from '../Login/store/LoginContext';

// interface IState { profilSet: boolean; studijSet: boolean; vrstaStudijaSet: boolean; }

class Dashboard extends React.Component<IStudent, any> {

    componentDidMount() {
        this.navigateToProfile();
        // this.props.history.push('/student/profile');
        // this.props.history.push('/student/request');
        if (!this.state.student) {
            this.Student();
        }
    }

    state = {
        student: this.props.student,
        btnProfile: false,
        btnStudyType: false,
        btnRequest: false
    }

    async Student() {
        let stud = await getStudent();
        this.setState({
            student: stud
        })
    }

    constructor(props) {
        super(props);
    }

    handleOdjava = () => {
        localStorage.clear();
        this.setState({
            btnProfile: false,
            btnStudyType: false,
            btnRequest: false
        });
    }

    navigateToProfile = () => {
        this.props.history.push('/student/profile');
        this.setState({
            btnProfile: true,
            btnStudyType: false,
            btnRequest: false
        });
    }

    navigateToStudyType = () => {
        this.props.history.push('/student/studyType');
        this.setState({
            btnProfile: false,
            btnStudyType: true,
            btnRequest: false
        });
    }

    navigateToRequest = () => {
        this.props.history.push('/student/request');
        this.setState({
            btnProfile: false,
            btnStudyType: false,
            btnRequest: true
        });
    }

    renderStudentCard() {
        // console.log(this.state.data);
        if (!this.state.student) {
            return (null);
        }
        // else {
        // this.props.history.push('/student/profile');
        return (
            // <LoginConsumer>
            //     {(value) => {
            //         const { tokenData } = value;
            //         return (
            //             <Card style={CardRoot}>
            //                 <CardImg style={CardComponent} top={true} src={avatar} alt="profile image" />
            //                 <CardBody style={CardContainer}>
            //                     <CardTitle>{tokenData.ime} {tokenData.prezime}</CardTitle>
            //                     <CardSubtitle>PIN: {tokenData.oib}</CardSubtitle>
            //                     <CardText>JMBAG: {tokenData.jmbag}</CardText>

            //                     <Route>
            //                         <Button color="info" style={CardButton} onClick={this.navigateToProfile}>Profile</Button>
            //                     </Route>
            //                     <Route>
            //                         <Button color="info" style={CardButton} onClick={this.navigateToStudyType}>Study Type</Button>
            //                     </Route>
            //                     <Route>
            //                         <Button color="info" style={CardButton} onClick={this.navigateToRequest}>Request</Button>
            //                     </Route>
            //                     <Button color="info" style={CardButton} onClick={this.handleOdjava} href='/login'>Logout</Button>
            //                 </CardBody>
            //             </Card>
            //         );
            //     }}
            // </LoginConsumer>


            <Card style={CardRoot}>
                {/* <CardImg style={CardComponent} top={true} src={avatar} alt="profile image" /> */}
                <div style={CardComponent}>
                    <img style={{ width: 120, height: 120, margin: 4, borderRadius: 6 }} src={avatar} />
                </div>
                <CardBody style={CardContainer}>
                    <CardTitle>{this.state.student.ime} {this.state.student.prezime}</CardTitle>
                    <CardSubtitle>PIN: {this.state.student.oib}</CardSubtitle>
                    <CardText>JMBAG: {this.state.student.jmbag}</CardText>

                    <Route>                  
                        <Button color="info" active={this.state.btnProfile} style={CardButton} onClick={this.navigateToProfile} ><i className="fa fa-user"/>  Profile</Button>
                    </Route>
                    <Route>
                        <Button color="info" active={this.state.btnStudyType} style={CardButton} onClick={this.navigateToStudyType}><i className="fa fa-graduation-cap"/>  Study Type</Button>
                    </Route>
                    <Route>
                        <Button color="info" active={this.state.btnRequest} style={CardButton} onClick={this.navigateToRequest}><i className="fa fa-wpforms"/> Request</Button>
                    </Route>
                    <Button color="info" style={CardButton} onClick={this.handleOdjava} href='/login'><i className="fa fa-sign-out"/>   Logout</Button>
                </CardBody>
            </Card>

        );
        // }
    }


    // Main render
    render() {

        // if (this.state.error) {
        //     return (
        //         <Redirect to='/Login' />
        //     );
        // }
        return (
            <div className="body">

                {this.renderStudentCard()}

            </div>
        );
    }
}


export default withRouter(Dashboard);



const CardContainer = {
    width: '100%',
    height: '100%',
}

const CardComponent = {
    // width: '50%',
    // height: '50%',
    // margin: 'auto',
    // marginTop: 20,

    width: 128,
    height: 128,
    margin: 'auto',
    marginTop: 30,
    backgroundColor: '#4ec1de',
    borderRadius: 6
}

const CardButton = {
    width: '100%',
    backgroundColor: 'transparent',
    color: 'black',
    marginBottom: '2%',
    borderColor: 'black',
}

const CardRoot = {
    margin: '5%',
    marginTop: '10%',
    borderRadius: '4%',
    width: '100%',
}

