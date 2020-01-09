import * as React from 'react';

import {ILogin} from './state';
import {getToken} from '../../../api/api';

const LoginContext = React.createContext<ILogin | any>(null);

export class LoginProvider extends React.Component<ILogin> {
 
    state = {
        email: '',
        password: '',
        tokenData: this.props.auth,
        logIn: false,
    }

    handleEmailChange = (event) => {
        this.setState({
            email: event.target.value
        })
        // console.log(this.state.jmbag);
    }

    handlePasswordChange = (event) => {
        this.setState({
            password: event.target.value
        });
        // console.log(this.state.password);
    }

    handleSubimit = async () => {
        let res = await getToken(this.state.email, this.state.password);
        this.setState({
            tokenData: res
        })

        if(res){
            this.setState({
                logIn: true
            })
            // window.location.reload();
        }

    }


    render(){
        return (
            <LoginContext.Provider value= {{
                handleEmailChange: this.handleEmailChange,
                handlePasswordChange: this.handlePasswordChange,
                handleSubmit: this.handleSubimit,
                tokenData: this.state.tokenData,
                email: this.state.email,
                password: this.state.password,
                logIn: this.state.logIn
            }}>
                {this.props.children}
            </LoginContext.Provider>
        );
    }

}



export const LoginConsumer = LoginContext.Consumer;
