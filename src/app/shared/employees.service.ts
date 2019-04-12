import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiConstants } from '../constants/api-constants';
import { EmployeeModel } from './employee-model';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {

  constructor(private http: HttpClient) { }

  getAllEmployee() {
    return this.http
        .get(ApiConstants.API_ENDPOINT)
        .toPromise()
        .then(this.handleSuccess)
        .catch(this.handleError);
  }

  getAllRoles() {
    return this.http
        .get(ApiConstants.API_ENDPOINT + "/role")
        .toPromise()
        .then(this.handleSuccess)
        .catch(this.handleError);
  }

  getEmployeeById(id) : Promise<any> {
    return this.http
              .get(ApiConstants.API_ENDPOINT + "/" + id)
              .toPromise()
              .then(this.handleSuccess)
              .catch(this.handleError);
  }

  edit(employee: EmployeeModel, id): Promise<any> {
    return this.http
            .put(
              ApiConstants.API_ENDPOINT + "/" + id, employee
            )
            .toPromise()
            .then(this.handleSuccess)
            .catch(this.handleError);
  }

  delete(id): Promise<any> {
    return this.http
            .delete(
              ApiConstants.API_ENDPOINT + "/" + id
            )
            .toPromise()
            .then(this.handleSuccess)
            .catch(this.handleError);
  }

  add(employee: EmployeeModel) {
    return this.http
              .post(
                ApiConstants.API_ENDPOINT, employee, httpOptions
              )
              .toPromise()
              .then(this.handleSuccess)
              .catch(this.handleError);
              
  }

  private handleSuccess(successResponse): Promise<any> {
    return Promise.resolve(successResponse);
  }

  private handleError(errorResponse): Promise<any> {
    return Promise.reject(errorResponse);
  }
}
