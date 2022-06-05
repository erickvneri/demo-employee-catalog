/* eslint-disable no-mixed-operators */
import { useState, useEffect } from "react";
import { connect } from "react-redux";

import "./index.css";
import { fetchEmployees } from "../store/Employee/actions";

import EmployeeCard from "./EmployeeCard";
import SimpleSpinner from "./SimpleSpinner/SimpleSpinner";


const EmployeePool = ({
  fetchEmployees,
  employees,
  loadingEmployees,
  employeeError,
}) => {
  const [employeePool, setPool] = useState();

  // On Mount, load employees
  useEffect(() => fetchEmployees(), [fetchEmployees]);

  // On employees loaded
  useEffect(() => setPool(employees), [employees]);

  return (
    <>
      <h2>Employees Pool</h2>
      <p>Full API documentation <a href="http://www.dummy.restapiexample.com/">Here</a>.</p>

      <div className={"employee-pool-container"}>
        {loadingEmployees
          && <SimpleSpinner/>
          || employeePool?.map(item => (
               <EmployeeCard
                employeeId={item.id}
                employeeName={item.employee_name}
                employeeAge={item.employee_age}
                employeeSalary={item.employee_salary}
                employeeProfileImage={item.profile_image}/>
        ))}
      </div>
    </>
  );
};

const mapStateToProps = state => ({
  employees: state.employees,
  loadingEmployees: state.loadingEmployees,
  employeesError: state.employeesError
});

const mapDispatchToProps = dispatch => ({
  fetchEmployees: () => dispatch(fetchEmployees())
});

export default connect(mapStateToProps, mapDispatchToProps)(EmployeePool);
