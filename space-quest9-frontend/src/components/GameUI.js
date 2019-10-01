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
  constructor(props){
    super(props);
    this.state = {
      title: '',
      description: '',
      id: null,
      location: {
        x: null,
        y: null,
      },
      neighbors: {
        to_n: null,
        to_s: null,
        to_e: null,
        to_w: null
      },
      players: [],
      rooms: [],
      vertices: [],
      directionError: ""
    }
  }
  
  componentDidMount = () => {
    const token = localStorage.getItem('key');
    const options = {
      headers: {
        Authorization: `Token ${token}`
      }
    }

    //Instantiates Randomized Room Algorithm for Randomly Generated points(rooms)
    // Axios.post('https://lambda-mud-be.herokuapp.com/api/adv/createworld/', options)
    // .then(response => {
    //   console.log(response)
    // })
    // .catch(error => {
    //   console.log(error)
    // })
    
    // Instantiates Our Preset Constellation Room Stucture
    // Axios.post('https://lambda-mud-be.herokuapp.com/api/adv/createourworld/', options)
    //   .then(response => {
    //     console.log(response)
    //   })
    //   .catch(error => {
    //     console.log(error)
    //   })

    Axios.get('https://lambda-mud-be.herokuapp.com/api/adv/init/', options)
      .then(response => {
        const { title, description, id, locx, locy, n_to, s_to, e_to, w_to, players } = response.data.room;

        this.setState({title, description, id, location: {x: locx, y: locy}, neighbors: {to_n: n_to, to_s: s_to, to_e: e_to, to_w: w_to}, players: [...players]})
      })
      .catch(error => {
        console.log(error)
      })

    Axios.get('https://lambda-mud-be.herokuapp.com/api/adv/rooms/', options)
      .then(response => {
        let sortedRooms = response.data.rooms.sort((a, b) => (a.id > b.id) ? 1 : -1)
        console.log("Rooms: ", response)
        this.setState({rooms: sortedRooms})
        // Map over the vertices with the location points from each room in room array on state
        let vertices =  sortedRooms.map(location => {return {'x': location.locx, 'y': location.locy}})
        this.setState({vertices})
      })
      .catch(error => {
        console.log(error)
      })
  }
          
  // rooms = [
  //   {
  //     title: 'Epsilon Lyrae',
  //     description: 'Famously known as being a double star – two stars in one with each star is also a double. The double double star!',
  //     x: 250,
  //     y: 60,
  //     to_n: null,
  //     to_s: 1,
  //     to_e: null,
  //     to_w: null
  //   },
  //   {
  //     title: 'Alpha Lyrae (Vega, Fidis, Harp Star)',
  //     description: 'Brightest star in Lyra constellation and the fifth brightest star in the sky.',
  //     x: 308,
  //     y: 110,
  //     to_n: 0,
  //     to_s: 2,
  //     to_e: null,
  //     to_w: null
  //   },
  //   {
  //     title: 'Zeta1 Lyrae',
  //     description: 'Contains as many as 7 individual starts. However is often over looked by near by neighbors.',
  //     x: 288,
  //     y: 168,
  //     to_n: 1,
  //     to_s: 5,
  //     to_e: null,
  //     to_w: 3
  //   },
  //   {
  //     title: 'Delta2 Lyrae',
  //     description: 'Pulsating luminous giant star consisting of one super hot blue star, next to a yellow star.',
  //     x: 187,
  //     y: 183,
  //     to_n: null,
  //     to_s: 4,
  //     to_e: 2,
  //     to_w: null
  //   },
  //   {
  //     title: 'Gamma Lyrae (Sulafat)',
  //     description: 'Second-brightest star in the northern constellation and can be seen with the naked eye from Earth.',
  //     x: 147,
  //     y: 338,
  //     to_n: 3,
  //     to_s: null,
  //     to_e: 5,
  //     to_w: null
  //   },
  //   {
  //     title: 'Beta Lyrae',
  //     description: 'Made of 2 stars that are so close that their shapes are heavily distorted by mutual gravitation forces: the stars have ellipsoidal shapes.',
  //     x: 236,
  //     y: 325,
  //     to_n: 2,
  //     to_s: null,
  //     to_e: null,
  //     to_w: 4
  //   }
  // ]
    
    flyTo = direction => {
      // console.log(direction)
      const goTo = this.state.neighbors
      console.log(goTo)
      
      if (this.state.rooms[goTo[direction]] !== null) {
        if (goTo[direction] !== 0) {
          console.log(goTo[direction])
          const token = localStorage.getItem('key');
          const options = {
            headers: {
              Authorization: `Token ${token}`
            }
          }
          Axios.post('https://lambda-mud-be.herokuapp.com/api/adv/move/', {'room_id': goTo[direction]}, options)
          .then(response => {
            console.log("Move: ", response)
            const { title, description, id, locx, locy, n_to, s_to, e_to, w_to, players } = response.data.room;
            this.setState({title, description, id, location: {x: locx, y: locy}, neighbors: {to_n: n_to, to_s: s_to, to_e: e_to, to_w: w_to}, players: [...players], directionError: ""})
        })
        .catch(error => {
          console.log(error)
        })

        // console.log("x: ", this.rooms[goTo[direction]].x, "y: ", this.rooms[goTo[direction]].y)
      }
      else {
        this.setState({directionError: 'There is nothing in that direction.'})
        console.log('There is nothing in that direction.')
      } 
    }
    else {
      console.log("Room does not have that index number")
    }
    // if (this.rooms[goTo[direction]] !== 0) {
    //   if (goTo[direction] !== null) {
    //     this.setState({ 
    //       location: {
    //         x: this.rooms[goTo[direction]].x,
    //         y: this.rooms[goTo[direction]].y,
    //       },
    //       neighbors: {
    //         to_n: this.rooms[goTo[direction]].to_n,
    //         to_s: this.rooms[goTo[direction]].to_s,
    //         to_e: this.rooms[goTo[direction]].to_e,
    //         to_w: this.rooms[goTo[direction]].to_w
    //       }
    //     })
    //     // console.log("x: ", this.rooms[goTo[direction]].x, "y: ", this.rooms[goTo[direction]].y)
    //   }
    //   else {
    //     console.log('There is nothing in that direction.')
    //   } 
    // }
    // else {
    //   console.log("Room does not have that index number")
    // }
  }
  logout = () => {
    localStorage.removeItem("key");
    this.props.history.push("/")
  }

  render() {

    const Styles = styled.div`
      #menu {
        border: 0 solid transparent;
        background-color: black;
        box-shadow: 0px 1px 1px #4D4CE3;
        /* margin-bottom: 0;  */
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
            <Menu.Item name='logout' onClick={()=> this.logout()}/>
          </Menu.Menu>
        </Menu>
        <div className="container">
          <Grid celled columns={2} doubling stackable>
            <Grid.Column>
              <Canvas vertices={this.state.vertices} info={this.state} rooms={this.state.rooms}/>
            </Grid.Column>
            <Grid.Column className="console">
              <OutputConsole current={this.state}/>
              <Controls flyTo={this.flyTo}/>
            </Grid.Column>
          </Grid>
        </div>
      </Styles>
    );
  }
}

export default GameUI