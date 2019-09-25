import React, { useState } from "react";
import axios from "axios";
import { Button, Form } from "semantic-ui-react";

const Register = props => {
  const [user, setUser] = useState({
    username: "",
    email: "",
    password1: "",
    password2: ""
  });

  const handleSubmit = event => {
    event.preventDefault();
    axios
      .post("https://lambda-mud-be.herokuapp.com/api/registration", user)
      .then(res => {
        console.log('in handleSubmit',res);
        // props.history.push("/login");
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
            label="E-mail"
            name="email"
            type="text"
            value={user.email}
            onChange={event => handleChange(event)}
            width={16}
          />
        </Form.Group>

      <Form.Group>
        <Form.Input
          label="Password"
          name="password1"
          type="password"
          value={user.password1}
          onChange={event => handleChange(event)}
          width={16}
        />
      </Form.Group>

      <Form.Group>
        <Form.Input
          label="Repeat Password"
          name="password2"
          type="password"
          value={user.password2}
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

export default Register;
