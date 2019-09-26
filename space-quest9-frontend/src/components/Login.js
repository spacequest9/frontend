import React, { useState } from "react";
import axios from "axios";
import { withRouter } from "react-router";
import { Button, Form } from "semantic-ui-react";

const Login = props => {
  const [user, setUser] = useState({
    username: "",
    password: "",
  });

  const handleSubmit = event => {
    event.preventDefault();
    axios
      .post("https://lambda-mud-be.herokuapp.com/api/login/", user)
      .then(res => {
        console.log(res);
        localStorage.setItem('key', res.data.key)
        props.history.push("/game");
      })
      .catch(err => console.log("error from post", err));
  };

  const handleChange = event => {
    setUser({
      ...user,
      [event.target.name]: event.target.value
    });
  };

  return (
    <Form onSubmit={event => handleSubmit(event)}>
      <Form.Group>
        <Form.Input
          label="Username"
          name="username"
          type="text"
          value={user.username}
          onChange={event => handleChange(event)}
          width={16}
        />
      </Form.Group>

      <Form.Group>
        <Form.Input
          label="Password"
          name="password"
          type="password"
          value={user.password}
          onChange={event => handleChange(event)}
          width={16}
        />
      </Form.Group>

        <Button
          type="submit"
          positive
          icon="checkmark"
          labelPosition="right"
          content="Submit"
        />
    </Form>
  );
};

export default withRouter(Login);
