import React from "react";
import Button from "../UI/Button";
import classes from "./CustomerRegistration.module.css";
import {FormUI,FormuiControl} from "../UI/FormUI";

function CustomerRegistration(props) {
  return (
    <FormUI className={classes.registration}>
      <h1>Signup</h1>
      <form>
        <FormuiControl className={classes["form-control"]}>
          <label>Name:</label>
          <input type="text" />
        </FormuiControl>
        <FormuiControl className={classes["form-control"]}>
          <label>Address:</label>
          <input type="text" />
        </FormuiControl>
        <FormuiControl className={classes["form-control"]}>
          <label>Phone:</label>
          <input type="text" />
        </FormuiControl>
        <FormuiControl className={classes["form-control"]}>
          <label>Email:</label>
          <input type="text" />
        </FormuiControl>
        <FormuiControl className={classes["form-control"]}>
          <label>Password:</label>
          <input type="text" />
        </FormuiControl>
        <FormuiControl className={classes["form-control"]}>
          <Button>Submit</Button>
        </FormuiControl>
      </form>
    </FormUI>
  );
}

export default CustomerRegistration;
