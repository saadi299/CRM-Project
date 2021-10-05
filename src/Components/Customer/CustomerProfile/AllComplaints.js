import React from "react";
import classes from "./AllComplaints.module.css";
import MaterialTable from "material-table";

function AllComplaints(props) {
  const data = [
    {
      no: 1,
      subject: "test - 1",
      date: "Jan-1",
      details: "view",
      statues: "on progress",
    },
    {
      no: 2,
      subject: "test - 2",
      date: "Jan-1",
      details: "view",
      statues: "cpmplete",
    },
    {
      no: 3,
      subject: "test - 3",
      date: "Jan-2",
      details: "view",
      statues: "pending",
    },
    {
      no: 4,
      subject: "test - 4",
      date: "Jan-3",
      details: "view",
      statues: "on progress",
    },
  ];

  const columns = [
    {
      title: "NO",
      field: "no",
      
     
    },
    {
      title: "SUBJECT",
      field: "subject",
    },
    {
      title: "DATE",
      field: "date",
    },
    {
      title: "DETAILS",
      field: "details",
    },
    {
      title: "STATUES",
      field: "statues",
    },
  ];
  return (
    <div>
      <MaterialTable
        title="All Complaints"
        data={data}
        columns={columns}
        options={{ paging: false, exportButton: true }}
        detailPanel={rowData => {
            return (
              <iframe
                width="100%"
                height="315"
                src="https://www.youtube.com/embed/C0DPdy98e4c"
                frameborder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              />
            )
          }}
      />
    </div>
  );
}

export default AllComplaints;
