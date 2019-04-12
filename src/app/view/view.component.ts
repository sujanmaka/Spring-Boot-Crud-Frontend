import { Component, OnInit } from '@angular/core';
import { EmployeeModel } from '../shared/employee-model';
import { EmployeesService } from '../shared/employees.service';
import { ToastrService } from 'ngx-toastr';
import { Location } from '@angular/common';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

  employees: Array<EmployeeModel> = [];

  constructor(private employeeService: EmployeesService,
    private toastr: ToastrService,
    private location: Location) { }

  ngOnInit() {
    this.getAllEmployees();
  }
  getAllEmployees(): any {
    this.employeeService
      .getAllEmployee()
      .then(successResponse => {
        this.employees = successResponse;

      })
      .catch(errorResponse => {
        this.toastr.error(errorResponse.error.message)
      })
  }

  delete(id : any) {
    this.employeeService
      .delete(id)
      .then(successResponse => {
        this.getAllEmployees();
      })
      .catch();
  }

}
