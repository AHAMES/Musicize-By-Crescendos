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

function avg(elmt) {
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
const MusicianCard = props => {
  return (
    <div className="cardContainer">
      <a href={"/profile/" + props.id}>
        <Card>
          <CardImg
            className="noHover"
            top
            width="100%"
            src={props.profile}
            alt="Card image cap"
          />
          <CardBody className="noHover">
            <CardTitle className="noHover">{props.firstName}</CardTitle>
            <CardSubtitle className="noHover">
              {"Rating: " + avg(props.ratings).toFixed(2)} <br />{" "}
              {"Tags: " + props.genre} <br />
              {"Fee: " + props.fee} EGP
            </CardSubtitle>
            <CardText className="noHover">
              {props.state + ", " + props.country} <br /> {props.description}
            </CardText>

            <Button className="noHover">Check Profile</Button>
          </CardBody>
        </Card>
      </a>
    </div>
  );
};

export default MusicianCard;
