
import * as React from 'react';
import {
    Button,
    Form,
    FormGroup,
    Label,
    Input,
} from 'reactstrap';

import '../Css/Login.css';
import { LoginConsumer } from './store/LoginContext';

class Login extends React.Component {

    loginRender() {
        return (
            <div className="container login">
                <div>
                    <LoginConsumer>
                        {(value) => {
                            const { handleEmailChange,
                                handlePasswordChange,
                                handleSubmit,
                                email, password } = value;
                            return (
                                <Form /*onSubmit = {this.handleSubimit}*/ >
                                    <FormGroup>
                                        <Label className="label" for="forJmbag">USERNAME</Label>
                                        <Input className="form-control" type="email"
                                            name="jmbag" id="jmbagID" placeholder="Insert your username"
                                            onChange={handleEmailChange}
                                            value={email}
                                        />
                                    </FormGroup>
                                    <FormGroup>
                                        <Label className="label" for="forPassword">PASSWORD</Label>
                                        <Input className="form-control " type="password"
                                            name="password" id="passwordID" placeholder="Insert your password"
                                            onChange={handlePasswordChange}
                                            value={password}
                                        />
                                    </FormGroup>
                                    <Button color="secondary" onClick={handleSubmit}  /* href='/student' */>Login</Button>
                                </Form>
                            );
                        }}
                    </LoginConsumer>
                </div>
            </div>
        );
    }


    render() {
        return (
            this.loginRender()
        );
    }

}


export default Login;