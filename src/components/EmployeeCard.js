import { useState } from "react";
import { connect } from "react-redux";
import { fetchEmployeeInfo } from "../store/Employee/actions";

// Components
import EmployeeInfo from "./EmployeeInfo";


const EmployeeCard = ({
  employeeId,
  employeeName,
  epmloyeeAge,
  employeeSalary,
  employeeProfileImage,
  fetchEmployeeInfo
}) => {
  const [dialogOpen, toggleDialog] = useState(false);

  const fetchOnClick = () => {
    toggleDialog(true);
    fetchEmployeeInfo(employeeId);
  };

  return (
    <>
      <button
        className={"employee-pool-card"}
        onClick={fetchOnClick}
        cursor={"pointer"}>
          <img
            src={employeeProfileImage}
            alt={employeeName}/>
          <span style={{
            display: "flex",
            flexDirection: "column" }}>
            <p><strong>Id:     </strong>{employeeId}</p>
            <p><strong>NAME:   </strong>{employeeName}</p>
            <p><strong>AGE:    </strong>{epmloyeeAge}</p>
            <p><strong>SALARY: </strong>${(employeeSalary/1000)?.toFixed(2)}</p>
          </span>
      </button>

      <EmployeeInfo open={dialogOpen} onClose={() => toggleDialog(false)}/>
    </>
  );
};


const mapDispatchToProps = dispatch => ({
  fetchEmployeeInfo: (employeeId) => dispatch(fetchEmployeeInfo(employeeId))
});

export default connect(null, mapDispatchToProps)(EmployeeCard);
