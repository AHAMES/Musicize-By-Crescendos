import React from "react";

import Fimg from "../Resources/Hover/Facebook.png";
import FimgHover from "../Resources/Hover/FacebookRed.png";
import Tw from "../Resources/Hover/twitter.png";
import TwR from "../Resources/Hover/twitterred.png";
import Inst from "../Resources/Hover/insta.png";
import InstR from "../Resources/Hover/instaRed.png";
var style = {
  backgroundColor: "#090909",
  color: "white",
  borderTop: "1em solid #9d0b0e",
  textAlign: "center",
  padding: "20px",
  left: "0",
  bottom: "0",
  height: "auto",
  width: "100%",
  position: "Relative"
};

export default class Footer extends React.Component {
  render() {
    return (
      <div style={style}>
        <table>
          <tr>
            <td>
              <h4>Company</h4>
            </td>
            <td>
              <h4>Discover</h4>
            </td>
          </tr>
          <tr>
            <td>
              <a href="Keys.html#piano">About</a>
            </td>
            <td>
              <a href="Strings.html#cello">Search</a>
            </td>
          </tr>

          <tr>
            <td>
              <a href="Keys.html#synthesizer">Help</a>
            </td>
            <td>
              <a href="Strings.html#cello">Site Reviews</a>
            </td>
          </tr>
          <tr>
            <td>Terms of Service</td>

            <td>
              <a href="Strings.html#cello">Expansion Plans</a>
            </td>
          </tr>
          <tr>
            <td>Privacy Settings</td>
            <td>
              <a href="Strings.html#cello">Blogs</a>
            </td>
          </tr>

          <tr>
            <td>Careers</td>
          </tr>
          <tr>
            <td>Contacts us</td>
          </tr>
        </table>
        <h3>Join us on</h3>
        <div className="SMicons">
          <a href="http://facebook.com ">
            <img
              src={Fimg}
              onMouseOver={e => (e.currentTarget.src = FimgHover)}
              onMouseOut={e => (e.currentTarget.src = Fimg)}
            />{" "}
            <section id="fb" />
          </a>
          <section id="tw">
            <img
              src={Tw}
              onMouseOver={e => (e.currentTarget.src = TwR)}
              onMouseOut={e => (e.currentTarget.src = Tw)}
            />
          </section>
          <section id="insta">
            <img
              src={Inst}
              onMouseOver={e => (e.currentTarget.src = InstR)}
              onMouseOut={e => (e.currentTarget.src = Inst)}
            />
          </section>
        </div>
        <div className="left">
          <p> Copyright &copy; 2019 Musicize for freelancing talent </p>
          <a id="Mail" href="mailto:Crescendos@bue.com">
            {" "}
            crescendos@bue.com
          </a>
        </div>
      </div>
    );
  }
}
