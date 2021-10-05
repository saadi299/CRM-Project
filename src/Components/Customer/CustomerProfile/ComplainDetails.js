import React from "react";
import Button from "../../UI/Button";
import classes from "./ComplainDetails.module.css";
import { FormUI, FormuiControl } from "../../UI/FormUI";
import StepperStatues from "./StepperStatues";

function ComplainDetails(props) {
  return (
    <div className={classes["complain-details"]}>
      <h4>ComplainDetails</h4>
      <StepperStatues/>

     


      <ul>
        <li>
          <div>Subject </div> <div className={classes.info}>Subject-1</div>
        </li>
        <li>
          <div>Description </div> <div> saadimohammed149@gmail.com </div>
        </li>
        <li>
          <div>Phone </div> <div> 01689610688 </div>
        </li>
        <li>
          <div> Address </div> <div> Nikunja-2 Dhaka.</div>
        </li>
        <li>
          <div> Total Complaints </div> <div> 8</div>
        </li>
      </ul>
      <form>
        <FormuiControl className={classes["form-control"]}>
          <label>Write Your Comment</label>
          <textarea rows={5} />
        </FormuiControl>
        <FormuiControl className={classes["form-control"]}>
          <Button>Submit</Button>
        </FormuiControl>
      </form>
    </div>
  );
}

export default ComplainDetails;
