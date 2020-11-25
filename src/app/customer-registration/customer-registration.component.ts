import { Component, OnInit } from '@angular/core';
import { Customer } from '../customer';
import { CustomerRegistrationService } from '../customer-registration.service';

@Component({
  selector: 'app-customer-registration',
  templateUrl: './customer-registration.component.html',
  styleUrls: ['./customer-registration.component.scss']
})
export class CustomerRegistrationComponent implements OnInit {

  customer: Customer = new Customer("", "", "", "");
  message:any;

  constructor(private service:CustomerRegistrationService) { }

  ngOnInit(): void {
  }

  public registerNow(){
    let resp = this.service.doRegistration(this.customer);
    resp.subscribe((data:any) => this.message=data);
  }

}
