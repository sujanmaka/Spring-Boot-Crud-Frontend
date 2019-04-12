import { RoleModel } from './role-model';

export class EmployeeModel {
    id: number;
    empAddress: string;
    empName: string;
    empAge: number;
    role: RoleModel;
}