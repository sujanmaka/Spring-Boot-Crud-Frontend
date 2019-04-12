import { Component, OnInit } from '@angular/core';
import { EmployeesService } from './shared/employees.service';
import { EmployeeModel } from './shared/employee-model';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-root',
  template: '<router-outlet></router-outlet>',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  e

}
