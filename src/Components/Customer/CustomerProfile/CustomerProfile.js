import React from "react";
import classes from "./CustomerProfile.module.css";

function CustomerProfile(props) {
  return (
    <div className={classes["customer-profile"]}>
      <h4></h4>
      <ul>
        <li>
          <div>Name </div> <div>Saadi Mohammed </div>
        </li>
        <li>
          <div>Email </div> <div> saadimohammed149@gmail.com </div>
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
    </div>
  );
}

export default CustomerProfile;
