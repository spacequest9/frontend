import React, { useState } from "react";
import axios from "axios";
import { withRouter } from "react-router";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";

const styles = theme => ({
  paper: {
    marginTop: theme.spacing.unit * 8,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: `${theme.spacing.unit * 5}px ${theme.spacing.unit * 5}px ${theme.spacing.unit *5}px`
  },
  container: {
    maxWidth: '200px'
  }
})

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
      .post("https://lambda-mud-be.herokuapp.com/api/registration/", user)
      .then(res => {
        console.log('in handleSubmit',res);
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

  const classes = props;

  return (
    <form onSubmit={event => handleSubmit(event)}>
        <TextField
          label="Username"
          id="username"
          name="username"
          value={user.username}
          onChange={event => handleChange(event)}
          fullWidth
        />
      
        <TextField
            label="Email"
            id="email"
            name="email"
            value={user.email}
            onChange={event => handleChange(event)}
            fullWidth
          />

        <TextField
          label="Password"
          id="password1"
          name="password1"
          value={user.password1}
          onChange={event => handleChange(event)}
          fullWidth
          type="password"
        />


        <TextField
          label="Repeat Password"
          id="password2"
          name="password2"
          value={user.password2}
          onChange={event => handleChange(event)}
          fullWidth
          type="password"
        />
        <Button
          type="submit"
          fullWidth
          color="primary"
        >Submit</Button>
    </form>
  );
};

export default withRouter(Register);
