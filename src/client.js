class Client {
  constructor () {
    this.apiUrl = "https://dummy.restapiexample.com/api/v1";
    this.endpoint = {
      EMPLOYEES: "/employees",
      EMPLOYEE: "/employee"
    };
  }

  getEmployees() {
    return fetch(`${this.apiUrl}${this.endpoint.EMPLOYEES}`);
  }

  getEmployee(employeeId) {
    return fetch(`${this.apiUrl}${this.endpoint.EMPLOYEE}/${employeeId}`);
  }
};

export default Client;