import React from "react";
import classes from "./Profile.module.css";
import Face from "../../../Images/face.jpg";
import ComplaintsForm from "./ComplaintsForm";
import AllComplaints from "./AllComplaints";
import CustomerProfile from "./CustomerProfile";
import ComplainDetails from "./ComplainDetails";
import { Route, Link } from "react-router-dom";

function Profile(props) {
  return (
    <div className={classes.profile}>
      <div className={classes["profile-left"]}>
        <div className={classes["profile-image"]}>
          <img src={Face}></img>
        </div>
        <h5>Saadi Mohammed Chowdhury</h5>
        <hr />

        <Link className={classes["profile-menu"]} to="/CustomerProfile">
          Profile
        </Link>
        <Link className={classes["profile-menu"]} to="/ComplaintsForm">
          Create Complaints
        </Link>
        <Link className={classes["profile-menu"]} to="/AllComplaints">
          All Complaints
        </Link>
        <Link className={classes["profile-menu"]} to="/ComplainDetails">
          Complain Details
        </Link>
        <div></div>
      </div>

      <div className={classes["profile-right"]}>
        <Route exact path="/CustomerProfile">
          <CustomerProfile></CustomerProfile>
        </Route>

        <Route exact path="/ComplaintsForm">
          <ComplaintsForm></ComplaintsForm>
        </Route>

        <Route exact path="/AllComplaints">
          <AllComplaints></AllComplaints>
        </Route>
        <Route exact path="/ComplainDetails">
          <ComplainDetails/>
        </Route>
      </div>
    </div>
  );
}

export default Profile;
