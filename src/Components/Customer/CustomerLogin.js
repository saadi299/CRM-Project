import React from "react";
import classes from "./CustomerLogin.module.css";
import Button from "../UI/Button";
import {FormUI,FormuiControl} from "../UI/FormUI";

function CustomerLogin(props) {
  return (
    <FormUI className={classes.login}>
      <h1>Login</h1>
      <form>
      <FormuiControl className={classes["form-control"]}>
        <label>Email:</label>
        <input type="text" />
      </FormuiControl>
      <FormuiControl className={classes["form-control"]}>
        <label>Password:</label>
        <input type="text" />
      </FormuiControl>
      <FormuiControl className={classes["form-control"]}>
        <Button>Login</Button>
      </FormuiControl>
      </form>
    </FormUI>
  );
}

export default CustomerLogin;
