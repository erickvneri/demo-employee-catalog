import { render, screen } from '@testing-library/react';
import { fetchEmployees, fetchEmployeeInfo } from '../store/Employee/actions';
import EmployeePool from '../components/EmployeePool';
import MockProvider from "./mockProvider";


/**
 * Testing thunk call mocking
 * dispatcher for better tracking.
 */
describe("[ Employee Thunks (actions) ]", () => {
  const dispatch = jest.fn();
  const getState = jest.fn();

  // !Test Case #1
  describe("fetchEmployees", () => {
    test(`calls
      dispatch=true
      getState=false
      mockClient=false`, () => {
      const expectedAction = "LOADING_EMPLOYEES";
      fetchEmployees()(dispatch, getState);

      // Dispatch
      expect(dispatch).toBeCalledTimes(1);
      expect(dispatch.mock.lastCall[0].type).toEqual(expectedAction);

      // getState
      expect(getState).toBeCalledTimes(0);
    });
  });

  // !Test Case #2
  describe("fetchEmployeeInfo", () => {
    test(`calls
      dispatch=true
      getstate=false
      mockClient=false`, () => {
      const expectedAction = "LOADING_EMPLOYEE_INFO";
      fetchEmployeeInfo(1)(dispatch, getState);

      // Dispatch
      expect(dispatch).toBeCalledTimes(1);
      expect(dispatch.mock.lastCall[0].type).toEqual(expectedAction);

      // getState
      expect(getState).toBeCalledTimes(0);
    });
  });
});

/**
 * Testing basic render cycle
 * on its defaults. (i.e. NO MOCKING)
 */
describe("[ Render ]", () => {
  test("[ Void Render ]", () => {
    render(<EmployeePool/>, { wrapper: MockProvider });
    expect(screen).toBeTruthy();
    expect(screen.getByRole("heading", { name: "Employees Pool" })).toBeInTheDocument();
  });
});
