import React, { useState } from "react";
import { Button, Modal, Icon } from "semantic-ui-react";
import Navbar from "./Navbar";
import Login from "./Login";

const Homepage = props => {

  return (
    <div className="homepage-container">
      <Navbar />
      <h1>SpaceQuest9</h1>

      <Modal size="tiny" trigger={<Button>Log In</Button>} closeIcon>
        <Modal.Header>Sign In</Modal.Header>
        <Modal.Content>
          <Login />
        </Modal.Content>
        {/* <Modal.Actions>
            <Button
              color="violet"
              content="Need to Register?"
              onClick={() => props.history.push('/register')}
            />
          </Modal.Actions> */}
      </Modal>
    </div>
  );
};

export default Homepage;
