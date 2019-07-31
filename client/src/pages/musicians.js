import React, { Component } from "react";
import { Form, Row, Input, Button, Col, FormGroup } from "reactstrap";
import MusicianCard from "../Components/musicianCard";

class Musicians extends Component {
  constructor() {
    super();
    this.setBudget = this.setBudget.bind(this);
    this.setRating = this.setRating.bind(this);
    this.setGenres = this.setGenres.bind(this);
    this.setHours = this.setHours.bind(this);
    this.state = {
      hours: 1,
      budget: 0,
      genres: [],
      rating: 1,
      musicians: [],
      temp: []
    };
  }

  avg(elmt) {
    var sum = 0;
    for (var i = 0; i < elmt.length; i++) {
      sum += parseInt(elmt[i], 10); //don't forget to add the base
    }

    if (elmt.length === 0) {
      return 0;
    }
    var avg = sum / elmt.length;
    return avg;
  }
  setRating(event) {
    this.setState({
      rating: event.target.value
    });
  }
  setBudget(event) {
    this.setState({
      budget: event.target.value
    });
  }
  setHours(event) {
    this.setState({
      hours: event.target.value
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
  remove = () => {
    this.setState((this.state.musicians = []));
  };
  getData() {
    console.log("mount");

    fetch("/api/musicians")
      .then(res => res.json())
      .then(allmusicians => this.setState({ temp: allmusicians }, () => {}));
  }
  getSearchResults = () => {
    // alert(this.state.budget + "\n"+this.state.rating + "\n"+this.state.genres);
    this.remove();
    this.getData();
    var musiciansList = this.state.temp;

    musiciansList = musiciansList.filter(
      e =>
        this.avg(e.performerAccount.ratings).toFixed(2) >= this.state.rating &&
        e.performerAccount.ratePerhour * this.state.hours <=
          this.state.budget &&
        (this.state.genres.length === 0 ||
          e.performerAccount.genres.some(e2 =>
            this.state.genres.includes(e2)
          ) === true)
    );
    this.setState({ musicians: musiciansList });
    console.log(musiciansList);
    /*for (let i = 0; i < musiciansList.length; ++i) {
      if (musiciansList[i].ratings >= this.state.rating)
        musiciansList.splice(i, 1);
      if (musiciansList[i].ratePerhour > this.state.budget * this.state.hours)
        musiciansList.splice(i, 1);
      let flag = true;
      if (
        JSON.stringify(musiciansList[i].genres) ===
        JSON.stringify(this.state.genres)
      ) {
        musiciansList.splice(i, 1);
      }
    }*/
  };

  componentDidMount() {
    console.log("mount");

    fetch("/api/musicians")
      .then(res => res.json())
      .then(allmusicians =>
        this.setState({ musicians: allmusicians }, () => {
          console.log(allmusicians);
        })
      );
  }
  render() {
    return (
      <div className="content container ">
        <h2 style={{ color: "white" }}>Search</h2>
        <Form
        className="SearchFilter"     style={{ backgroundColor: "white", width: "900px", height: "40%" ,  }}
        >
          <Row>
            <Col>
              <input
                type="number"
                onChange={this.setBudget}
                name="budget"
                placeholder="Enter your budget"
              />
            </Col>
            <Col>
              <input
                type="number"
                onChange={this.setHours}
                name="hours"
                placeholder="No. of hours of your event"
              />
            </Col>
            <Col>
              <Input
                onChange={this.setGenres}
                style={{ height: "50px" }}
                type="select"
                multiple
                name="genres"
              >
                <option>Harpist</option>
                <option>Violinist</option>
                <option>Guitarist</option>
                <option>Jazz</option>
              </Input>
            </Col>
            <Col>
              <input
                type="number"
                name="rating"
                placeholder="Rating"
                onChange={this.setRating}
              />
            </Col>
            <Col>
              <Button type="button" className="Button" class="btn btn-danger" onClick={this.getSearchResults}>Submit</Button>
            </Col>
          </Row>
        </Form>
        <div className="wrapperFlex">
          <div id="showMusicians" className="container wrapperGrid box1">
            {this.state.musicians.map(msicians => (
              <MusicianCard
                id={msicians._id}
                key={msicians._id}
                firstName={msicians.fullname}
                description={msicians.performerAccount.description}
                ratings={msicians.performerAccount.ratings}
                profile={msicians.performerAccount.profileImage}
                country={msicians.country}
                state={msicians.state}
                genre={msicians.performerAccount.genres}
                fee={msicians.performerAccount.ratePerhour}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default Musicians;
