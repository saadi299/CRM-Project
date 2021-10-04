import React from 'react';
import Button from '../../UI/Button';
import classes from './ComplaintsForm.module.css';
import {FormUI,FormuiControl} from "../../UI/FormUI";



function ComplaintsForm(props) {
    return (
        <FormUI className={classes["complaints-form"]}>
        <h1>Create Your Complaints</h1>
        <form>
        <FormuiControl className={classes["form-control"]}>
          <label>Subject:</label>
          <input type="text" />
        </FormuiControl>
        <FormuiControl className={classes["form-control"]}>
          <label>Description:</label>
          <textarea
          rows={5}
        />
        </FormuiControl>
        <FormuiControl className={classes["form-control"]}>
          <label>ScreenShot:</label>
          <input type="file" />
        </FormuiControl>
        <FormuiControl className={classes["form-control"]}>
          <Button>Submit</Button>
        </FormuiControl>
        </form>
      </FormUI>
    );
}

export default ComplaintsForm;