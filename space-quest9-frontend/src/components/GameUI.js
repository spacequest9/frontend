import React, { Component } from 'react';
import {
  Grid,
  Dropdown,
  Menu
} from 'semantic-ui-react';
import Axios from 'axios';
import icon from './spacequestlogo-03.svg';
import bgimage from './bgimage.jpg';
import Canvas from './Canvas';
import Controls from './Controls';
import OutputConsole from './OutputConsole';
import styled from 'styled-components';

class GameUI extends Component {
  state = {
    name: 'Epsilon Cassi',
    description: 'Bright and green',
    location: {
      x: 97,
      y: 330,
    },
    neighbors: {
      to_n: 0,
      to_s: 1,
      to_e: 2,
      to_w: 3
    }
  }

  componentDidMount = () => {
    console.log("Check")
    Axios.get('https://lambda-mud-be.herokuapp.com/api/adv/rooms/')
      .then(response => {
        console.log(response.data.rooms)
      })
      .catch(error => {
        console.log(error)
      })
  }

  rooms = [
    {
      name: 'Epsilon Lyrae',
      description: 'Famously known as being a double star – two stars in one with each star is also a double. The double double star!',
      x: 250,
      y: 60,
      to_n: null,
      to_s: 1,
      to_e: null,
      to_w: null
    },
    {
      name: 'Alpha Lyrae (Vega, Fidis, Harp Star)',
      description: 'Brightest star in Lyra constellation and the fifth brightest star in the sky.',
      x: 308,
      y: 110,
      to_n: 0,
      to_s: 2,
      to_e: null,
      to_w: null
    },
    {
      name: 'Zeta1 Lyrae',
      description: 'Contains as many as 7 individual starts. However is often over looked by near by neighbors.',
      x: 288,
      y: 168,
      to_n: 1,
      to_s: 5,
      to_e: null,
      to_w: 3
    },
    {
      name: 'Delta2 Lyrae',
      description: 'Pulsating luminous giant star consisting of one super hot blue star, next to a yellow star.',
      x: 187,
      y: 183,
      to_n: null,
      to_s: 4,
      to_e: 2,
      to_w: null
    },
    {
      name: 'Gamma Lyrae (Sulafat)',
      description: 'Second-brightest star in the northern constellation and can be seen with the naked eye from Earth.',
      x: 147,
      y: 338,
      to_n: 3,
      to_s: null,
      to_e: 5,
      to_w: null
    },
    {
      name: 'Beta Lyrae',
      description: 'Made of 2 stars that are so close that their shapes are heavily distorted by mutual gravitation forces: the stars have ellipsoidal shapes.',
      x: 236,
      y: 325,
      to_n: 2,
      to_s: null,
      to_e: null,
      to_w: 4
    }
  ]

  // Map over the vertices with the location points from each room in room array
  vertices = [
    this.rooms.map(location => { 
      return {'x': location.x, 'y': location.y}
    })
  ]

  flyTo = direction => {
    // console.log(direction)
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
            <Grid.Column>
              <Canvas vertices={this.vertices} info={this.state} rooms={this.rooms}/>
            </Grid.Column>
            <Grid.Column className="console">
              <OutputConsole />
              <Controls flyTo={this.flyTo}/>
            </Grid.Column>
          </Grid>
        </div>
      </Styles>
    );
  }
}

export default GameUI