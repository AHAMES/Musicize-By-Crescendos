import React, { Component } from "react";
import Slider from "../Components/slider";
import GenreCard from "../Components/genreCard";

class Home extends Component {
  constructor() {
    super();
    this.state = {
      genres: []
    };
  }
  componentDidMount() {
    console.log("mount");

    fetch("/api/home")
      .then(res => res.json())
      .then(allgenres =>
        this.setState({ genres: allgenres }, () => {
          console.log(allgenres);
        })
      );
  }
  render() {
    return (
      <React.Fragment>
        {" "}
        <Slider />
        <div className="content container wrapperFlex">
          <div className="container wrapperGrid box1">
            {this.state.genres.map(genres => (
              <GenreCard
                key={genres.id}
                name={genres.name}
                picture={genres.picture}
              />
            ))}
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Home;
