import React from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Input
} from "reactstrap";
import logo from "../Resources/logoName.png";

export default class Navigation extends React.Component {
  constructor(props) {
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

  nav = React.createRef();

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
    this.navBar = document.getElementById("navBar");
    this.sticky = this.navBar.offsetTop;
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  handleScroll = () => {
    if (window.pageYOffset >= this.sticky) {
      this.navBar.classList.add("sticky");
    } else {
      this.navBar.classList.remove("sticky");
    }
  };

  render() {
    return (
      <div id="navBar">
        <Navbar className="navbar navbar-default fixed-top" expand="md">
          <Nav className="mr-auto" navbar>
            <NavbarBrand className="LogoImg">
              <NavLink href="/home">
                <img src={logo} width="auto" className="img-fluid" />
              </NavLink>
            </NavbarBrand>
          </Nav>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="/musicians">Musicians</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/SignUp">Signup</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/auth/google">Login</NavLink>
              </NavItem>
              <NavItem>
                <Input
                  type="search"
                  name="search"
                  id="exampleSearch"
                  className="SearchBar"
                  placeholder="search placeholder"
                />
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
