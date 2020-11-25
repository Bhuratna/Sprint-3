import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CustomerRegistrationService {

  constructor(private http:HttpClient) { }

  public doRegistration(customer:any){
    return this.http.post("http://localhost:8088/customer/add", customer, {responseType: 'text' as 'json'});
  }

  public getCustomers(){
    return this.http.get("http://localhost:8088/customer/get/allCustomers");
  }

  public getCustomersById(id:number){
    return this.http.get(`http://localhost:8088/customer/get/${id}`);
  }

  public deleteCustomer(id:number){
    return this.http.delete(`http://localhost:8088/customer/delete/${id}`);
  }

  public validateCustomer(username:string, password:string){
    return this.http.get(`http://localhost:8088/customer/get/validateCustomer/${username}/${password}`);
  }
}
