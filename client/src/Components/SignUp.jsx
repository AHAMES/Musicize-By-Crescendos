import React from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  Button,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Col,
  Row,
  Form,
  FormGroup,
  Label,
  Input,
  FormText
} from "reactstrap";
export default class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.testMethod = this.testMethod.bind(this);
    this.toggle = this.toggle.bind(this);
    this.setName = this.setName.bind(this);
    this.setUser = this.setUser.bind(this);
    this.setEmail = this.setEmail.bind(this);
    this.setAddress = this.setAddress.bind(this);
    this.setPassword = this.setPassword.bind(this);
    this.setCity = this.setCity.bind(this);
    this.setState2 = this.setState2.bind(this);
    this.setStageName = this.setStageName.bind(this);
    this.setGenres = this.setGenres.bind(this);
    this.setPrice = this.setPrice.bind(this);
    this.setCover = this.setCover.bind(this);
    this.setImage = this.setImage.bind(this);
    this.state = {
      isMusician: false,
      fullName: "",
      email: "",
      userName: "",
      address: "",
      city: "",
      state2: "",
      stageName: "",
      genres: [],
      price: 0,
      coverImage: "",
      profileImage: ""
    };
  }
  toggle() {
    this.setState({
      isMusician: !this.state.isMusician
    });
  }

  setGenres(event) {
    var options = event.target.options;
    this.state.genres = [];
    var value = [];
    for (var i = 0, l = options.length; i < l; i++) {
      if (options[i].selected) {
        value.push(options[i].value);
      }
    }
    this.setState({
      genres: value
    });
  }
  setCover(e) {
    this.setState({
      coverImage: e.target.value
    });
  }
  setImage(e) {
    this.setState({
      profileImage: e.target.value
    });
  }
  setAddress(e) {
    this.setState({
      address: e.target.value
    });
  }
  setPrice(e) {
    this.setState({
      price: e.target.value
    });
  }
  setPassword(e) {
    this.setState({
      password: e.target.value
    });
  }
  setCity(e) {
    this.setState({
      city: e.target.value
    });
  }
  setUser(e) {
    this.setState({
      userName: e.target.value
    });
  }
  setState2(e) {
    this.setState({
      state2: e.target.value
    });
  }
  setEmail(e) {
    this.setState({
      email: e.target.value
    });
  }
  setName(event) {
    this.setState({
      fullName: event.target.value
    });
  }
  testMethod(event) {
    alert(
      this.state.fullName +
        "\n" +
        this.state.email +
        "\n" +
        "new Account created "
    );
    let x = {
      fullname: this.state.fullName,
      username: this.state.userName,
      isPerformer: this.state.isMusician,
      country: "Egypt",
      state: "Giza",
      password: "123",
      performerAccount: null
    };
    if (x.isPerformer) {
      var performerAccount = {
        profileImage: this.state.profileImage,
        stageName: this.state.stageName,
        ratePerhour: this.state.price,
        performerType: "Musician",
        genres: this.state.genres,
        coverImage: this.state.coverImage,
        description: "",
        ratings: []
      };
      x.performerAccount = performerAccount;
    }
    /*fetch("http://localhost:5000/api/signup", {
      method: "POST",
      body: JSON.stringify({
        task: x
      }),
      mode: "no-cors",
      headers: { "Content-Type": "application/json" }
    })
      .then(function(response) {
        return response.json();
      })
      .then(function(body) {
        console.log(body);
      });*/
    //console.log(performerAccount == null ? "No" : performerAccount);
    event.preventDefault();
  }
  setStageName(e) {
    this.setState({
      stageName: e.target.value
    });
  }
  render() {
    return (
      <div className="content wrapperFlex container">
        <Form
          style={{ margin: "100px", color: "black" }}
          onSubmit={this.testMethod}
        >
          <h4>Register Account</h4>
          <Row form>
            <Col md={6}>
              <FormGroup>
                <Label for="exampleEmail">Full Name</Label>
                <Input type="text" name="fullName" onChange={this.setName} />
              </FormGroup>
            </Col>

            <Col md={6}>
              <FormGroup>
                <Label for="examplePassword">Username</Label>
                <Input
                  type="text"
                  name="username"
                  onChange={this.setUser}
                  id="username"
                />
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col>
              <hr />
            </Col>
          </Row>
          <Row form>
            <Col md={6}>
              <FormGroup>
                <Label for="exampleAddress">Password</Label>
                <Input
                  type="password"
                  name="Pass"
                  id="Password"
                  onChange={this.setPass}
                />
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup>
                <Label for="exampleAddress">Email</Label>
                <Input
                  type="email"
                  name="email"
                  id="mail"
                  onChange={this.setEmail}
                />
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col>
              <hr />
            </Col>
          </Row>
          <FormGroup>
            <Label for="exampleAddress2">Address</Label>
            <Input
              type="text"
              name="address"
              id="exampleAddress2"
              placeholder="1234 Main St"
              onChange={this.setAddress}
            />
          </FormGroup>
          <Row>
            <Col>
              <hr />
            </Col>
          </Row>
          <Row form>
            <Col md={6}>
              <FormGroup>
                <Label for="exampleCity">City</Label>
                <Input
                  type="text"
                  name="city"
                  onChange={this.setCity}
                  id="exampleCity"
                />
              </FormGroup>
            </Col>
            <Col md={4}>
              <FormGroup>
                <Label for="exampleState">State</Label>
                <Input
                  type="text"
                  name="state"
                  id="exampleState"
                  onChange={this.setState2}
                />
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col>
              <hr />
            </Col>
          </Row>
          <FormGroup check>
            <Input
              type="checkbox"
              name="check"
              id="exampleCheck"
              onClick={this.toggle}
            />
            <Label for="exampleCheck" check>
              <h4>Register as a musician</h4>{" "}
            </Label>
          </FormGroup>

          <Form style={{ display: this.state.isMusician ? "block" : "none" }}>
            <Row form>
              <Col md={6}>
                <FormGroup>
                  <Label for="exampleEmail">Stage Name</Label>
                  <Input
                    type="text"
                    name="stageName"
                    id="stageName"
                    onChange={this.setStageName}
                  />
                </FormGroup>
              </Col>
            </Row>
            <Row>
              <Col>
                <hr />
              </Col>
            </Row>
            <Row form>
              <Col md={6}>
                <FormGroup>
                  <Label for="selectMulti">
                    {" "}
                    Select Genres you can play (Ctrl + click)
                  </Label>
                  <Input
                    type="select"
                    name="selectMulti"
                    id="exampleSelectMulti"
                    multiple
                    onChange={this.setGenres}
                  >
                    <option>Rock</option>
                    <option>Classic</option>
                    <option>Piano</option>
                    <option>Flute</option>
                    <option>Underground</option>
                  </Input>
                </FormGroup>
              </Col>
            </Row>

            <Row>
              <Col>
                <hr />
              </Col>
            </Row>
            <Row>
              <FormGroup>
                <Label for="yourPrice"> Enter your price per hour (EGP)</Label>
                <Input
                  type="text"
                  pattern="[0-9]+"
                  name="yourPrice"
                  onChange={this.setPrice}
                />
              </FormGroup>
            </Row>
            <Row>
              <Col>
                <hr />
              </Col>
            </Row>
            <Row>
              <Col>
                <hr />
              </Col>
            </Row>
            <Row>
              <FormGroup>
                <Label for="profileImage"> Profile Image Link</Label>
                <Input
                  type="text"
                  name="profileImage"
                  onChange={this.setImage}
                />
                <Label for="coverImage"> Cover Image Link</Label>
                <Input type="text" name="coverImage" onChange={this.setCover} />
              </FormGroup>
            </Row>
            <Row>
              <Col>
                <hr />
              </Col>
            </Row>
          </Form>
          <input
            type="submit"
            className="btn btn-primary"
            value="Create Account"
          />
        </Form>
      </div>
    );
  }
}
