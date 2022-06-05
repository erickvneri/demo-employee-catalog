/* eslint-disable no-mixed-operators */
import { useState, useEffect  } from "react";
import { connect } from "react-redux";
import { defaulProfileImgs } from "../store/Employee/reducer";
import Client from "../client";

const client = new Client();

const initialState = {
  id: "N/A",
  name: "N/A",
  age: "N/A",
  salary: Number(0).toFixed(2),
  profileImage: defaulProfileImgs[3]
};

const EmployeeInfo = ({
  open,
  onClose,
  employeeId,
}) => {
  const [employeeInfo, setInfo] = useState(initialState);

  useEffect(() => {
    client.getEmployee(employeeId)
      .then(res => res.json())
      .then(data => setInfo(data.data))
      .catch(err => console.warn(err));
  }, [employeeId, open]);

  const onCloseCallback = () => {
    if (onClose) onClose();
    setInfo(initialState);
  };

  return (
    <dialog
      open={open}
      className={"employee-info-dialog"}>
        <span className={"employee-info-container"}>
          <button
            onClick={onCloseCallback}
            className={"dialog-exit-button"}>X</button>

          {/* Employee Loaded Information */}
          <img
            src={employeeInfo?.profileImage || "https://mysalonsoftware.co.za/wp-content/uploads/2019/08/avatar-user-hacker-3830b32ad9e0802c-512x512.png"}
            alt={employeeInfo?.name}/>
          <p><strong>Employee Id:  </strong>{employeeInfo?.id}</p>
          <p><strong>Full Name:    </strong>{employeeInfo?.employee_name}</p>
          <p><strong>Age:          </strong>{employeeInfo?.employee_age}</p>
          <p><strong>Base salary:  </strong>${employeeInfo?.employee_salary}</p>
        </span>
    </dialog>
  );
};


const mapStateToProps = state => ({
  loadingEmployee: state.loadingEmployee,
  employee: state.employee,
});

export default connect(mapStateToProps, null)(EmployeeInfo);