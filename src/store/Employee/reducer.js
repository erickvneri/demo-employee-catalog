import { actions } from "./actions";

export const defaulProfileImgs = [
  "https://cdn1.iconfinder.com/data/icons/avatars-1-5/136/87-512.png",
  "https://cdn2.iconfinder.com/data/icons/avatars-99/62/avatar-380-456332-512.png",
  "https://png.pngtree.com/png-clipart/20200224/original/pngtree-cartoon-color-simple-male-avatar-png-image_5230557.jpg",
  "https://mysalonsoftware.co.za/wp-content/uploads/2019/08/avatar-user-hacker-3830b32ad9e0802c-512x512.png"
];

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
        loadingEmployees: false,
        employees: action.employees?.map(item => ({
          ...item,
          profile_image: item.profile_image || defaulProfileImgs[Math.floor(Math.random() * 4)]
        }))
      };

    case actions.LOADING_EMPLOYEE_INFO:
      return {
        ...state,
        loadingEmployee: true
      }

    case actions.GET_EMPLOYEE_INFO:
      return {
        ...state,
        loadingEmployee: false,
        employee: action.employee
      }

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
