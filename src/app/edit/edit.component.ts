import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { EmployeeModel } from '../shared/employee-model';
import { EmployeesService } from '../shared/employees.service';
import { RoleModel } from '../shared/role-model';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  id: number;
  employee: EmployeeModel = new EmployeeModel();
  roles: Array<RoleModel> = [];
  constructor(
    private employeeService: EmployeesService,
    private toastr: ToastrService,
    private route: ActivatedRoute,
    private location: Location) { }

  ngOnInit() {
    this.getEmployeeForEdit();
    this.getAllRoles();
  }
  getAllRoles(): any {
    this.employeeService
      .getAllRoles()
      .then(successResponse => {
        this.roles = successResponse;
      })
      .catch(errorResponse => {

      });
  }

  getEmployeeForEdit() {
    this.id = this.route.snapshot.params.id;
    if (this.id) {
      this.employeeService
        .getEmployeeById(this.id)
        .then(response => {
          this.employee = response;
        })
        .catch(errorResponse => {
          this.toastr.error(errorResponse.error);
        });
    }
  }

  edit(id: number, form: NgForm) {
    this.employeeService
      .edit(this.employee, id)
      .then(successResponse => {
        this.location.back();
      })
      .catch(errorResponse => {
        this.toastr.error(errorResponse.error)
      });
  }

  back() {
    this.location.back();
  }

}
