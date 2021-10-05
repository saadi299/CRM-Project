import React from "react";
import { useState } from "react";
import {
  AppBar,
  Toolbar,
  CssBaseline,
  Typography,
  makeStyles,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import CustomerLogin from "../Customer/CustomerLogin";
import CustomerRegistration from "../Customer/CustomerRegistration";

const useStyles = makeStyles((theme) => ({
  navlinks: {
    marginLeft: theme.spacing(10),
    display: "flex",
  },
  logo: {
    flexGrow: "1",
    cursor: "pointer",
  },
  link: {
    textDecoration: "none",
    color: "white",
    fontSize: "20px",
    marginLeft: theme.spacing(20),
    "&:hover": {
      fontWeight: "bold",
      transition: "all 0.5 ease-out;",
    },
  },
}));

function Navbar(props) {
  const classes = useStyles();

  const loggedOutComponent = (
    <AppBar position="static">
      <CssBaseline />
      <Toolbar>
        <Typography variant="h4" className={classes.logo}>
          CRM
        </Typography>
        <div className={classes.navlinks}>
          <Link to="/CustomerRegistration" className={classes.link}>
            SignIn
          </Link>
          <Link to="/CustomerLogin" className={classes.link}>
            LogIn
          </Link>
        </div>
      </Toolbar>
    </AppBar>
  );

  const loggedInComponent = (
    <AppBar position="static">
      <CssBaseline />
      <Toolbar>
        <Typography variant="h4" className={classes.logo}>
          CRM
        </Typography>
        <div className={classes.navlinks}>
          <Link to="/CustomerLogin" className={classes.link}>
            LogOut
          </Link>
        </div>
      </Toolbar>
    </AppBar>
  );

  const forms = (
    <Switch>
      <Route exact path="/">
        <CustomerRegistration />
      </Route>
      <Route exact path="/CustomerRegistration">
        <CustomerRegistration />
      </Route>
      <Route exact path="/CustomerLogin">
        <CustomerLogin />
      </Route>
    </Switch>
  );

  const onClickHandler = () =>{
    setIsLogin(true)

  }

  return (
    <Router>
      {loggedOutComponent}
      {/* {loggedInComponent} */}
      {forms}

    
    </Router>
  );
}

export default Navbar;
