/* eslint-disable no-mixed-operators */
import { useState, useEffect } from "react";

import "./index.css";
import Client from "../client";

import EmployeeCard from "./EmployeeCard";
import SimpleSpinner from "./SimpleSpinner/SimpleSpinner";

const client = new Client();

const EmployeePool = () => {
  const [employeePool, setPool] = useState();
  const [loadingEmployees, setLoading] = useState(false);

  // On Mount, fetch
  // employees from hook
  useEffect(() => {
    setLoading(true);
    client.getEmployees()
      .then(res => res.json())
      .then(data => setPool(() => {
        setLoading(false);
        return data.data?.map(employee => ({
          ...employee,
          profile_image: "https://mysalonsoftware.co.za/wp-content/uploads/2019/08/avatar-user-hacker-3830b32ad9e0802c-512x512.png"
        }));
      }))
      .catch(err => console.warn(err));
  }, []);

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

export default EmployeePool;
