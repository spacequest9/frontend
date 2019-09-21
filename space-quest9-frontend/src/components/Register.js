import React, { useState } from "react";
import axios from "axios";
import { Button, Checkbox, Form, Header } from 'semantic-ui-react';

const Register = props => {
  const [user, setUser] = useState({
    username: "",
    password1: "",
    password2: ""
  });

  const handleSubmit = event => {
    event.preventDefault();
    axios
      .post("https://lambda-mud-test.herokuapp.com/api/register", user)
      .then(res => {
        console.log(res);
        props.history.push("/login");
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
      <Header as='h1'>Sign Up</Header>
      <Form.Field>
        <label>Username</label>
      <input
        name="username"
        type="text"
        value={user.username}
        onChange={event => handleChange(event)}
      />
      </Form.Field>

      <Form.Field>
        <label>Password</label>
      <input
        name="password1"
        type="password"
        value={user.password1}
        onChange={event => handleChange(event)}
      />
      </Form.Field>

      <Form.Field>
        <label>Password</label>
      <input
        name="password2"
        type="password"
        value={user.password2}
        onChange={event => handleChange(event)}
      />
      </Form.Field>
      <Button type="submit">
        Submit
      </Button>
    </Form>
  );
};

export default Register;
