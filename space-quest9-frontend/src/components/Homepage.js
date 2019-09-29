import React from "react";
import { Header, Container } from "semantic-ui-react";
import Navbar from "./Navbar";
import bgImage from "../assets/introbgi.jpg";
import Ashley from "../assets/AshleyOwens.png";
import Brett from "../assets/BrettMadrid.png"
import Eric from "../assets/EricWhitcomb.png"
import Arpita from "../assets/ArpitaSinha.png"

const Homepage = props => {
  return (
    <div className="homepage-container">
      {/* <h1>Space Quest 9</h1> */}
      <Container
        style={{
          width: "100%",
          backgroundImage: `url(${bgImage})`
        }}
      >
        <Navbar />
        <Header
          as="h1"
          content="SpaceQuest9"
          inverted
          style={{
            fontSize: "4em",
            fontWeight: "normal",
            marginBottom: 0
          }}
        />
        <Header
          as="h2"
          content="A Star Constellation Adventure Game"
          inverted
          style={{
            fontSize: "1.7em",
            fontWeight: "normal",
            marginTop: "1.5em"
          }}
        />
      </Container>
      <div className="about-us">
        <Header
          as="h4"
          content="Development Team"
          inverted
          style={{
            fontSize: "1.7em",
            fontWeight: "normal",
            marginTop: ".75em",
            color: "black"
          }}
        />
        <div className="img-container">
          <div class="ui four column grid">
            <div className="column">
              <div class="ui fluid card">
                <div class="image">
                  <img src={Ashley} alt=""/>
                </div>
                <div class="content">
                  <a class="header">Ashley Owens</a>
                </div>
              </div>
            </div>
            <div className="column">
              <div class="ui fluid card">
                <div class="image">
                  <img src={Brett} alt="" />
                </div>
                <div class="content">
                  <a class="header">Brett Madrid</a>
                </div>
              </div>
            </div>
            <div className="column">
              <div class="ui fluid card">
                <div class="image">
                  <img src={Arpita} alt="" />
                </div>
                <div class="content">
                  <a class="header">Arpita Sinha</a>
                </div>
              </div>
            </div>
            <div className="column">
              <div class="ui fluid card">
                <div class="image">
                  <img src={Eric} alt=""/>
                </div>
                <div class="content">
                  <a class="header">Eric Whitcomb</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
