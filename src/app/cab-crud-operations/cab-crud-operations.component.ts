import { Component, OnInit } from '@angular/core';
import { Cab } from '../cab';
import { CabBookingService} from '../cab-booking.service';

@Component({
  selector: 'app-cab-crud-operations',
  templateUrl: './cab-crud-operations.component.html',
  styleUrls: ['./cab-crud-operations.component.scss']
})
export class CabCrudOperationsComponent implements OnInit {

  cab:Cab=new Cab("", "");
  Cab:any;
  id:any;
  constructor(private service:CabBookingService) { }

  ngOnInit(): void {
  }
public RegisterNow()
{
  let resp=this.service.doRegistration(this.cab);
  resp.subscribe((data:any) =>this.cab=data);
}
public updateCab()
{
  let resp=this.service.update(this.cab);
  resp.subscribe((data:any) =>this.cab=data);
}
public deleteCab()
{
  let resp=this.service.delete(this.cab);
  resp.subscribe((data:any) =>this.cab=data);
}
public cabsType () {
  let resp=this.service.getCabsOfType(this.cab);
  resp.subscribe((data:any) => this.cab=data);
}
public countOfCabs() {
  let resp=this.service.getCountCabsOfType(this.cab);
  resp.subscribe((data:any) => this.cab=data);
}
}
