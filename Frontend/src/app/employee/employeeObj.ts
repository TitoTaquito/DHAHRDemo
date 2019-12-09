export class Employee{
  public EmplInfo: any[];

  constructor(
    public PersonnelNum?: string,
    public LastName?: string,
    public FirstName?: string,
    public HomePhone?: string,
    public EmployeeStatusCd?: string,
    public OfficeNum?: string,
    public Step?: string,
    public WorkPhone?:string,
    public WorkScheduleCd?:string
  ){}


}
