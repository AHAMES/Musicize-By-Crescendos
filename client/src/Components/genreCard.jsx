import React from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button
} from "reactstrap";
/*{
  props.picture;
}
{
  props.name;
}*/
const GenreCard = props => {
  return (
    <a href="/">
      <div className="card">
        <img
          className="card-img-top cardImage"
          src={props.picture}
          alt="Card image top"
        />
        <div className="card-img-overlay">
          <h3 className="card-title">
            <b className="highlighted">{props.name}</b>
          </h3>
        </div>
      </div>
    </a>
  );
};

export default GenreCard;
