/* eslint-disable no-mixed-operators */
import { useState, useEffect  } from "react";
import { connect } from "react-redux";
import { defaulProfileImgs } from "../store/Employee/reducer";

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
  loadingEmployee,
  employee,
}) => {
  const [employeeInfo, setInfo] = useState(initialState);

  useEffect(() => setInfo(employeeInfo => ({
    id: employee?.id,
    name: employee?.employee_name,
    age: employee?.employee_age,
    salary: (employee?.employee_salary/1000)?.toFixed(2),
    profileImage: employee?.profile_image || employeeInfo.profileImage
  })), [employee]);

  const onCloseCallback = () => {
    if (onClose) {
      onClose();
    }
    setInfo(initialState);
  };

  return (
    <dialog
      open={open}
      onClose={onCloseCallback}
      className={"employee-info-dialog"}>
        <span className={"employee-info-container"}>
          <img
            src={employeeInfo?.profileImage}
            alt={employeeInfo?.name}/>
          <p><strong>Employee Id:  </strong>{employeeInfo?.id}</p>
          <p><strong>Full Name:    </strong>{employeeInfo?.name}</p>
          <p><strong>Age:          </strong>{employeeInfo?.age}</p>
          <p><strong>Base salary:  </strong>${employeeInfo?.salary}</p>
        </span>
    </dialog>
  );
};


const mapStateToProps = state => ({
  loadingEmployee: state.loadingEmployee,
  employee: state.employee,
});

export default connect(mapStateToProps, null)(EmployeeInfo);