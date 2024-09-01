import { SmartCaptcha } from "@yandex/smart-captcha";
import { QRCodeCanvas } from "qrcode.react";
import React, { Component } from "react";
// import { Notifications } from 'react-push-notification-18';
import { Link } from "react-router-dom";
import { Button, Container } from "reactstrap";
import "./App.css";
import AppNavbar from "./components/AppNavbar";
import ProgressBar from "./components/ProgressBar";
import SearchComponent from "./components/SearchComponent";
import Data from "./resources/Data.json";

class Home extends Component {
  render() {
    var searchItems = [
      { name: "AngularJS", url: "https://angularjs.org/" },
      { name: "jQuery", url: "https://jquery.com/" },
      { name: "React", url: "https://facebook.github.io/react/" },
      { name: "Express", url: "http://expressjs.com/" },
      { name: "PHP", url: "http://w3courses.org/" },
      { name: "Laravel", url: "http://w3courses.org/" },
    ];
    const testData = [
      { bgcolor: "#6a1b9a", completed: 60 },
      { bgcolor: "#00695c", completed: 30 },
      { bgcolor: "#ef6c00", completed: 53 },
    ];

    return (
      <div>
        <QRCodeCanvas value="https://reactjs.org/" />
        <SmartCaptcha sitekey="http://localhost:3000" />
        {/* <Notifications/> */}
        <div>
          <div className="App">
            {testData.map((item, idx) => (
              <ProgressBar
                key={idx}
                bgcolor={item.bgcolor}
                completed={item.completed}
              />
            ))}
          </div>
          <SearchComponent items={searchItems} />
        </div>
        <div className="App">
          <div>
            <input
              className="search-box"
              placeholder="Enter The Title Of Movie"
            />
          </div>
          <div className="card-group">
            {Data.map((movie) => (
              <div className="card" key={movie.id}>
                <h3>{movie.Name}</h3>
                <p>{movie.Director}</p>
                <p>{movie.genre}</p>
                <p>{movie.ReleaseDate}</p>
              </div>
            ))}
          </div>
        </div>
        <AppNavbar />
        <Container fluid>
          <Button color="link">
            <Link to="/clients">Clients</Link>
          </Button>
        </Container>
      </div>
    );
  }
}
export default Home;
