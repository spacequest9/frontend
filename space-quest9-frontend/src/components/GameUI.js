import React, { Component } from 'react';
import bgimage from './bgimage.jpg';
import {
  Grid,
  Dropdown,
  Menu,
  Segment,
} from 'semantic-ui-react'
import icon from './spacequestlogo-03.svg'
import Canvas from './Canvas';
import styled from 'styled-components';

class GameUI extends Component {
  state = {
    fill: 'lightblue',
    stroke: 'redorange'
  }
  
  render() {
    const Styles = styled.div`
      .all{
        background-image: url(${bgimage});
      }
      .menuItem{
        margin:.30%;
        border: 3px solid #484948;
        background-color: #353535;
        border-radius: 25rem;
        position: absolute;
        top: .25rem;
        z-index: 1;
      }
      .remove{
        border: 3px solid red;
        background-color: red;
      }
      .container{
        background-image: url(${bgimage});
        background-attachment: fixed;
        padding: 1.5% 1%;
      }
      .console{
        background-color: rgba(50, 115, 220, 0.3);
        color: white;
      }
    `
    const colors = [
      // 'teal'
    ]

    
    return (
      <Styles className="all">
        <Menu size='mini' className="remove" inverted>
          <img className="menuItem" src={icon} alt="" width="64px"/>
          <Menu.Menu position='right'>
            <Dropdown item text='Menu'>
              <Dropdown.Menu >
                <Dropdown.Item>Home</Dropdown.Item>
                <Dropdown.Item>About</Dropdown.Item>
                <Dropdown.Item>Logout</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Menu.Menu>
        </Menu>
        <div className="container">
          <Grid celled columns={2} doubling stackable>
            <Grid.Column color={colors[0]}>
              <Canvas/>
            </Grid.Column>
            <Grid.Column className="console">
              <Segment className="console">Here will go the readouts</Segment>
              <Segment className="console">Control Container</Segment>
            </Grid.Column>
          </Grid>
        </div>
      </Styles>
    );
  }
}

export default GameUI