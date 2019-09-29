import React, { useState } from "react";
import { Container, Header } from "semantic-ui-react";
import Navbar from "./Navbar";
import bgImage from "./introbgi.jpg";

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
          as="h2"
          content="About Us"
          inverted
          style={{
            fontSize: "1.7em",
            fontWeight: "normal",
            marginTop: ".75em",
            color: "black"
          }}
        />
        <div className="img-container">
          
        </div>
      </div>
    </div>
  );
};

export default Homepage;
