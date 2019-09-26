import React, { Component } from 'react';
import bgimage from './bgimage.jpg';
import {
  Grid,
  Dropdown,
  Menu,
  Segment,
  Icon,
} from 'semantic-ui-react'
import icon from './spacequestlogo-03.svg'
import Canvas from './Canvas';
import OutputConsole from './OutputConsole';
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
      #menu {
        border: 0 solid transparent;
        background-color: black;
        box-shadow: 0px 1px 1px #4D4CE3; 
      }
      .menuItem{
        margin:.30%;
        /* border: 3px solid #484948;
        background-color: #353535; */
        border-radius: 25rem;
        box-shadow: 0px 1px 1px #4D4CE3; 
        position: absolute;
        top: .25rem;
        z-index: 1;
      }
      .container{
        background-image: url(${bgimage});
        background-attachment: fixed;
        padding: 1.5% 1%;
      }
      .letterpress { 
        position: absolute;
        left: 5.25rem;
        top: .6rem;
        margin: 0;
        z-index: 1;
        text-shadow: 0px 1px 1px #4D4CE3; 
        color: #222; 
        font: 3.3rem 'LeagueGothicRegular';
      }

      .console{
        background-color: rgba(50, 115, 220, 0.3);
        color: white;
        
        .panel{
          display: flex;
          justify-content: space-evenly;
          align-items: center;
          padding: 2% 7%;
          margin: 0 auto;
          width: 50%;
          
          .btn{
            background-color: rgba(50, 115, 220, 0.1);
            text-shadow: 0px 1px 1px #4D4CE3; 
            color: #222; 
            width: 55px;
            height: 53px;
            font-size: 3em;
            padding-top: 13px;
            border-radius: 2rem;
            margin: 3% 0;
            border: 1px solid lightslategrey;
            box-shadow: 3px 3px 3px black;
            text-shadow: 1px 1px 2px black;
            user-select: none;
            
            &:active{
              color: silver;
              background-color: rgba(255, 255, 255, 0.1);
              text-shadow: unset;
              box-shadow: 1px 1px 7px black;
            }
          }
          
          .mid{
            width: 25%;
            display: flex;
            flex-direction: column;
            align-items: center;
          }
        }
      }
    `
    const DirectionBtn = styled.div`
      border: 1px solid white;
    `
    const colors = [
      // 'teal'
    ]

    return (
      <Styles>
        <Menu size='mini' id="menu" inverted>
          <img className="menuItem" src={icon} alt="" width="64px"/>
          <h1 className='letterpress'>SpaceQuest9</h1>
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
              {/* <Segment className="console"> */}
                <h1>Constellation</h1>
                <OutputConsole />
              {/* </Segment> */}
              {/* <Segment className="console panel">
                <DirectionBtn className="console btn engraved" onClick={() => this.flyTo("to_w")}>
                  <Icon name='caret left' />
                </DirectionBtn>
                <div className="mid">
                  <DirectionBtn className="console btn" onClick={() => this.flyTo("to_n")}> 
                    <Icon name='caret up' />
                  </DirectionBtn>
                  <DirectionBtn className="console btn" onClick={() => this.flyTo("to_s")}>
                    <Icon name='caret down' />
                  </DirectionBtn>
                </div>
                <DirectionBtn className="console btn" onClick={() => this.flyTo("to_e")}> 
                  <Icon name='caret right' />
                </DirectionBtn>
              </Segment> */}
            </Grid.Column>
          </Grid>
        </div>
      </Styles>
    );
  }
}

export default GameUI