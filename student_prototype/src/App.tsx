import * as React from 'react';
import MainApp from './MainApp';
import Login from './Login';

import { LoginConsumer } from './Components/Login/store/LoginContext';


class App extends React.Component {

  public render() {
    // localStorage.clear();
    return (
      <LoginConsumer>
        {(value) => {
          const { logIn } = value;
          console.log("logger: ", logIn)
          let log = localStorage.getItem('login');
          // console.log("Login stanje: ", log)
          return (
            log ?
              <MainApp />
              :
              <Login />
          );
        }}
      </LoginConsumer>
    );
  }
}

// import Tester from '../src/Components/Hooks/Text';

// class App extends React.Component {

//   public render() {
//     return (
//       <div>
//           <Tester />
//       </div>
//     );
//   }
// }

export default App;

