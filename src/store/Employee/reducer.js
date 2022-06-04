import { actions } from "./actions";

const defaultProfileImg = "https://cdn1.iconfinder.com/data/icons/avatars-1-5/136/87-512.png";

const initialState = {
  loadingEmployees: false,
  employees: [],
  employeesError: null
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.LOADING_EMPLOYEES:
      return {
        ...state,
        loadingEmployees: true
      };

    case actions.GET_EMPLOYEES:
      return {
        ...state,
        employees: action.employees?.map(item => ({
          ...item,
          profile_image: item.profile_image || defaultProfileImg
        }))
      };

    case actions.EMPLOYEES_ERROR:
      return {
        ...state,
        employeesError: action.error
      };

    default:
      return { ...state };
  }
};

export default reducer;
