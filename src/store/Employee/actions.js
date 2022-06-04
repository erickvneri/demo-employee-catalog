export const actions = {
  GET_EMPLOYEES: "GET_EMPLOYEES",
  LOADING_EMPLOYEES: "LOADING_EMPLOYEES",
  EMPLOYEES_ERROR: "EMPLOYEES_ERROR",
};

const getEmployeesUrl = "https://dummy.restapiexample.com/api/v1/employees";

export const fetchEmployees = () => {
  return async (dispatch, getState) => {
    // Init "loading" state reference
    dispatch({ type: actions.LOADING_EMPLOYEES });

    fetch(getEmployeesUrl)
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
