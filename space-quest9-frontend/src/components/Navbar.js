import React, { Component } from "react";
import { Button, Menu, Modal } from "semantic-ui-react";
import Register from "./Register";

export default class MenuExampleSizeSmall extends Component {
  state = { activeItem: "home" };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;

    return (
      <Menu size="small" inverted>
        <Menu.Item>
          <Modal size="tiny" trigger={<Button>Register</Button>} closeIcon>
            <Modal.Header>Register</Modal.Header>
            <Modal.Content>
              <Register />
            </Modal.Content>
          </Modal>
        </Menu.Item>

        <Menu.Menu position="right">
          <Menu.Item
            name="Login"
            active={activeItem === "Login"}
            //onClick={this.handleItemClick}
          />
          <Menu.Item
            name="Logout"
            active={activeItem === "Logout"}
            //onClick={this.handleItemClick}
          />
        </Menu.Menu>
      </Menu>
    );
  }
}
