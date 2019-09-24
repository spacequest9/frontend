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
    location: {
      x: 300,
      y: 50,
    },
    neighbors: {
      to_n: 0,
      to_s: 1,
      to_e: 2,
      to_w: 3
    }
  }

  rooms = [
    {
      name: 'Sector 1',
      description: 'Bright and green',
      x: 400,
      y: 300,
      to_n: 1,
      to_s: 2,
      to_e: null,
      to_w: 1
    },
    {
      name: 'Sector 2',
      description: 'Bright and green',
      x: 100,
      y: 200,
      to_n: 2,
      to_s: 2,
      to_e: 0,
      to_w: null
    },
    {
      name: 'Sector 3',
      description: 'Bright and green',
      x: 300,
      y: 300,
      to_n: 0,
      to_s: 1,
      to_e: 0,
      to_w: 1
    },
    {
      name: 'Sector 4',
      description: 'Bright and green',
      x: 500,
      y: 200,
      to_n: 0,
      to_s: 1,
      to_e: 0,
      to_w: 1
    },
    {
      name: 'Sector 5',
      description: 'Bright and green',
      x: 100,
      y: 50,
      to_n: 0,
      to_s: 1,
      to_e: 0,
      to_w: 1
    },
    {
      name: 'Sector 6',
      description: 'Bright and green',
      x: 400,
      y: 400,
      to_n: 2,
      to_s: 1,
      to_e: 0,
      to_w: 1
    }
  ]

  // Map over the vertices with the location points from each room in room array
  vertices = [
    this.rooms.map(location => { 
      return {'x': location.x, 'y': location.y}
    })
  ]

  flyTo = direction => {
    console.log(direction)
    const goTo = this.state.neighbors

    if (this.rooms[goTo[direction]] !== null) {
      if (goTo[direction] !== null) {
        this.setState({ 
          location: {
            x: this.rooms[goTo[direction]].x,
            y: this.rooms[goTo[direction]].y,
          },
          neighbors: {
            to_n: this.rooms[goTo[direction]].to_n,
            to_s: this.rooms[goTo[direction]].to_s,
            to_e: this.rooms[goTo[direction]].to_e,
            to_w: this.rooms[goTo[direction]].to_w
          }
        })
        console.log("x: ", this.rooms[goTo[direction]].x, "y: ", this.rooms[goTo[direction]].y)
      }
      else {
        console.log('There is nothing in that direction.')
      } 
    }
    else {
      console.log("Room does not have that index number")
    }
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
    const DirectionBtn = styled.div`
      border: 1px solid white;
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
              <Canvas vertices={this.vertices} info={this.state} rooms={this.rooms}/>
            </Grid.Column>
            <Grid.Column className="console">
              <Segment className="console">Here will go the readouts</Segment>
              <Segment className="console">Control Container
                <DirectionBtn className="console" onClick={() => this.flyTo("to_n")}> 
                  North
                </DirectionBtn>
                <DirectionBtn className="console" onClick={() => this.flyTo("to_s")}>
                  South
                </DirectionBtn>
              </Segment>
            </Grid.Column>
          </Grid>
        </div>
      </Styles>
    );
  }
}

export default GameUI