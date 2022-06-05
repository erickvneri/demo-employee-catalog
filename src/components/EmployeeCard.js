/* eslint-disable no-mixed-operators */
import { useState, useEffect } from "react";
import { connect } from "react-redux";
import { fetchEmployeeInfo } from "../store/Employee/actions";
import Client from "../client";

// Components
import EmployeeInfo from "./EmployeeInfo";

const client = new Client();


const EmployeeCard = ({
  employeeId,
  employeeName,
  employeeAge,
  employeeSalary,
  employeeProfileImage,
}) => {
  const [dialogOpen, toggleDialog] = useState(false);
  const [employeeInfo, setInfo] = useState();

  return (
    <>
      <button
        className={"employee-pool-card"}
        onClick={() => toggleDialog(true)}
        cursor={"pointer"}>
          <img
            src={employeeProfileImage}
            alt={employeeName}/>
          <span style={{
            display: "flex",
            flexDirection: "column" }}>
            <p><strong>Id:     </strong>{employeeId}</p>
            <p><strong>NAME:   </strong>{employeeName}</p>
            <p><strong>AGE:    </strong>{employeeAge}</p>
            <p><strong>SALARY: </strong>${(employeeSalary/1000)?.toFixed(2)}</p>
          </span>
      </button>

      {dialogOpen
      && <EmployeeInfo
          open={dialogOpen}
          onClose={() => toggleDialog(false)}
          employeeId={employeeId}/>
      || ""}
    </>
  );
};

export default EmployeeCard;
