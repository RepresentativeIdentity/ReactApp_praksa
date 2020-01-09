import * as React from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem } from 'reactstrap';

  import '../Css/Navbar.css';

interface IProps {
    isOpen?: boolean;
}

interface IState {
    isOpen: boolean;
}
  
class NavBar extends React.Component<IProps, IState> {
  constructor(props: Readonly<IProps>) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div className="navbarColor">
        <Navbar light={true} expand="md">
          <NavbarBrand href="/Login" >Login</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar={true}>
            <Nav className="ml-auto" navbar={true}>
              <NavItem >
                <NavLink href="/student">Home</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/counter">About</NavLink>
              </NavItem>
              <UncontrolledDropdown nav={true} inNavbar={true}>
                <DropdownToggle nav={true} caret={true}>
                  Options
                </DropdownToggle>
                <DropdownMenu right={true}>
                  <DropdownItem>
                    <NavLink href="/contact">Contact</NavLink>
                  </DropdownItem>
                  <DropdownItem>
                    <NavLink href="/home">Home</NavLink>
                  </DropdownItem>
                  <DropdownItem divider={true} />
                  <DropdownItem>
                    Reset
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

export default NavBar;