import React, { Component } from "react";
import { Button, Menu, Modal } from "semantic-ui-react";
import Register from "./Register";
import Login from "./Login";
import icon from './spacequestlogo-03.svg';
import styled from 'styled-components';

export default class MenuExampleSizeSmall extends Component {
  state = { activeItem: "home" };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const Styles = styled.div`
    #nav{
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
    `

    const { activeItem } = this.state;

    return (
      <Styles>
        <Menu size="small" id="nav" inverted>
          <img className="menuItem" src={icon} alt="" width="64px" height="64px"/>
          <h1 className='letterpress'>SpaceQuest9</h1>
          <Menu.Menu position="right">
            <Menu.Item>
              <Modal size="tiny" trigger={<Button>Log In</Button>} closeIcon>
                <Modal.Header>Sign In</Modal.Header>
                <Modal.Content>
                  <Login />
                </Modal.Content>
              </Modal>
            </Menu.Item>
            <Menu.Item>
              <Modal size="tiny" trigger={<Button>Register</Button>} closeIcon>
                <Modal.Header>Register</Modal.Header>
                <Modal.Content>
                  <Register />
                </Modal.Content>
              </Modal>
            </Menu.Item>
          </Menu.Menu>
        </Menu>
      </Styles>
    );
  }
}
