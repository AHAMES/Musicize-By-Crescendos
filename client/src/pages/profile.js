import React, { Component } from "react";
import Gallery from "../Components/Gallery";
import VideoGallery from "../Components/VideoGallery";
class Profile extends Component {
  constructor() {
    super();
    this.state = {
      user: [],
      performer: [],
      genres: [],
      ratings: []
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
  componentDidMount() {
    console.log("mount");

    fetch("/api/profile?id=" + this.props.match.params.id)
      .then(res => res.json())
      .then(user => {
        this.setState({ user: user });
        this.setState({ performer: user.performerAccount });
        this.setState({
          genres: [...this.state.genres, user.performerAccount.genres]
        });
        this.setState({
          ratings: this.avg(user.performerAccount.ratings).toFixed(2)
        });
        console.log(user.performerAccount.ratings);
        console.log(this.state.ratings);
      });
  }

  render() {
    //import {coverImage, genres, profileImage, stageName, ratePerhour, genres} from this.state.profile;
    //console.log(this.state.performer.genres);
    return (
      <div className="content  profileFlex" style={{ padding: "0" }}>
        <div className="box2">
          <img
            src={this.state.performer.coverImage}
            className="coverImage"
            alt="Cover Photo"
          />
        </div>
        <div className="profileGrid">
          <div className="profileGrid2">
            <img
              className="profilePicture"
              src={this.state.performer.profileImage}
            />
            <div className="ContentText" style={{ marginTop: "10px" }}>
              <h2 className="stageName">{this.state.performer.stageName}</h2>

              <hr className="new1" />
              <div
                style={{
                  marginLeft: "10px",
                  display: "inline-block"
                }}
              >
                <b className="ratePerHour">{this.state.genres.join(", ")}</b>
                <br />
                <span className="ratePerHour">
                  {this.state.user.country + ", " + this.state.user.state}
                </span>
                <br />
                <span className="ratePerHour">Rating: {this.state.ratings}</span>
                <br />
                <b className="ratePerHour">
                  {this.state.performer.ratePerhour} EGP/hr
                </b>
<a href="#" className="button2">Hire now</a>
              </div>
            </div>
          </div>

        </div>
        <div className="gallery container">
          <h4>About</h4>

          <p>{this.state.performer.description}</p>
          <h4>Videos</h4>
          <VideoGallery />
          <h4>Gallery</h4>
          <Gallery />

        </div>
      </div>
    );
  }
}

export default Profile;
