import React, { Component } from "react";
import { Button, Modal, Icon } from "semantic-ui-react";
import Register from "./Register";

class ModalExampleDimmer extends Component {
  state = { open: false };

  show = dimmer => () => this.setState({ dimmer, open: true });
  close = () => this.setState({ open: false });

  render() {
    const { open, dimmer } = this.state;

    return (
      <div>
        <Button onClick={this.show("blurring")} closeIcon>
          Register
        </Button>

        <Modal size="tiny" dimmer={dimmer} open={open} onClose={this.close}>
          <Modal.Header>Sign Up</Modal.Header>
          <Modal.Content>
            <Modal.Description>
              <Register />
            </Modal.Description>
          </Modal.Content>
          <Modal.Actions>
            <Button color="black" onClick={this.close}>
              Nope
            </Button>
            <Button
              color="violet"
              content="Need to Register?"
            />
          </Modal.Actions>
        </Modal>
      </div>
    );
  }
}

export default ModalExampleDimmer;
