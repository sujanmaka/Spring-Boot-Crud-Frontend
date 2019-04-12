import { Component, OnInit } from '@angular/core';
import { EmployeeModel } from '../shared/employee-model';
import { EmployeesService } from '../shared/employees.service';
import { Location } from '@angular/common';
import { RoleModel } from '../shared/role-model';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  employee: EmployeeModel = new EmployeeModel();
  roles:Array<RoleModel> = [];
  selectedRole: RoleModel = new RoleModel();
  constructor(
    private employeeService: EmployeesService,
    private location: Location
  ) { }

  ngOnInit() {
    this.getRole();
  }
  getRole(): any {
    this.employeeService
        .getAllRoles()
        .then(successResponse => {
          this.roles = successResponse;
        })
        .catch(errorResponse => {

        });
  }

  add(employee: any) {
    this.employeeService
      .add(this.employee)
      .then(successResponse => {
          this.location.back();
      })
      .catch(errorResponse => {

      });
  }

  back() {
    this.location.back();
  }

}
