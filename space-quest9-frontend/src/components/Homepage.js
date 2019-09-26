import React, { useState } from "react";
import {
  Button,
  Container,
  Divider,
  Grid,
  Header,
  Icon,
  Image,
  List,
  Menu,
  Modal,
  Responsive,
  Segment,
  Sidebar,
  Visibility,
} from 'semantic-ui-react'
import Navbar from "./Navbar";
import Login from "./Login";
import bgImage from './bgimage.jpg';

const Homepage = props => {

  return (
    <div className="homepage-container">
      <Navbar />
      {/* <h1>Space Quest 9</h1> */}
      <Container
        style={{
          width: '100%',
          backgroundImage: `url(${bgImage})`,
        }}>
    <Header
      as='h1'
      content='SpaceQuest9'
      inverted
      style={{
        fontSize: '4em',
        fontWeight: 'normal',
        marginBottom: 0,
      }}
    />
    <Header
      as='h2'
      content='Do whatever you want when you want to.'
      inverted
      style={{
        fontSize: '1.7em',
        fontWeight: 'normal',
        marginTop: '1.5em',
      }}
    />
    <Button primary size='huge'>
      Get Started
      <Icon name='right arrow' />
    </Button>
  </Container>
    </div>
  );
};

export default Homepage;
