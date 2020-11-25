import { Component, OnInit } from '@angular/core';
import { Customer } from '../customer';
import { CustomerRegistrationService } from '../customer-registration.service';

@Component({
  selector: 'app-search-delete',
  templateUrl: './search-delete.component.html',
  styleUrls: ['./search-delete.component.scss']
})
export class SearchDeleteComponent implements OnInit {

  customer:Customer=new Customer("", "", "", "");
  customers:any;
  customerById: any;
  id:any;
  username:any;
  password:any;
  validCustomer:any;
  constructor(private service:CustomerRegistrationService) { }

  ngOnInit(): void {
    let resp = this.service.getCustomers();
    resp.subscribe((data)=>this.customers = data);
  }

  public getCustomersById(){
    let resp = this.service.getCustomersById(this.id);
    resp.subscribe((data)=>this.customerById= data);
  }

  public deleteCustomer(id:number){
    let resp = this.service.deleteCustomer(id);
    resp.subscribe((data:any)=>this.customers=data);
  }

  public validateCustomers(){
    let resp = this.service.validateCustomer(this.username, this.password);
    resp.subscribe((data)=>this.validCustomer=data);
  }
}
