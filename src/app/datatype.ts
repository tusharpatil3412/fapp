export interface admin {
    username: string,
    password: string
}
export interface employee {    
    id: number|undefined,
    first_Name:undefined| "string",
    last_Name:undefined| "string",
    username: "string",
    password:"string"
}
export interface record{
    id:number,
    checkin:"string",
    checkout:"string",
    emp_Id:number
}
export interface EmpCheckIn{
    emp_id:number;
}
export interface daterecord{
    startDt:string,
    endDt:string,
    Emp_Id:number
}
