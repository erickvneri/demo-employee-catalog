import Client from "../../client";


export const client = new Client();

export const actions = {
  GET_EMPLOYEES: "GET_EMPLOYEES",
  LOADING_EMPLOYEES: "LOADING_EMPLOYEES",

  LOADING_EMPLOYEE_INFO: "LOADING_EMPLOYEE_INFO",
  GET_EMPLOYEE_INFO: "GET_EMPLOYEE_INFO",

  EMPLOYEES_ERROR: "EMPLOYEES_ERROR",
};

export const fetchEmployees = () => {
  return (dispatch, getState) => {
    // Init "loading" state reference
    dispatch({ type: actions.LOADING_EMPLOYEES });

    client.getEmployees()
      .then(res => res.json())
      .then(data => dispatch({
        type: actions.GET_EMPLOYEES,
        employees: data.data
      }))
      .catch(err => dispatch({
        type: actions.EMPLOYEES_ERROR,
        error: err
      }));
  };
};

export const fetchEmployeeInfo = (employeeId) => {
  return (dispatch, getState) => {
    dispatch({ type: actions.LOADING_EMPLOYEE_INFO });

    client.getEmployee(employeeId)
      .then(res => res.json())
      .then(data => dispatch({
        type: actions.GET_EMPLOYEE_INFO,
        employee: data.data
      }))
      .catch(err => dispatch({
        type: actions.EMPLOYEES_ERROR,
        error: err
      }));
  };
};
