export interface Employee {
    personnelNum: string;
    lastName: string;
    firstName: string;
    homePhone: string;
  }
  
  export interface EmployeeAction {
    employeeStatusCd: string;
    officeNum: string;
    step: string;
    workPhone: string;
    workScheduleCd: string;
  }
  
  export interface EmployeeBundle{
    employee: Employee;
    employeeAction: EmployeeAction;
  }