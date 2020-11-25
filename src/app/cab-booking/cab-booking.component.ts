import { Component, OnInit } from '@angular/core';
import { Cab } from '../cab';
import { CabBookingService } from '../cab-booking.service';

@Component({
  selector: 'app-cab-booking',
  templateUrl: './cab-booking.component.html',
  styleUrls: ['./cab-booking.component.scss']
})
export class CabBookingComponent implements OnInit {
  cab: Cab=new Cab("","");
  message:any;
  constructor(private service : CabBookingService) { }

  ngOnInit(): void {
  }
  public registerNow(){
    let resp = this.service.doRegistration(this.cab);
    resp.subscribe((data:any) => this.message=data);
  }
   public updateCab() {
     let resp=this.service.update(this.cab);
     resp.subscribe((data:any) => this.message=data);
   }
   public deleteCab() {
    let resp=this.service.delete(this.cab);
    resp.subscribe((data:any) => this.message=data);
  }
  public cabsType () {
    let resp=this.service.getCabsOfType(this.cab);
    resp.subscribe((data:any) => this.message=data);
  }
  public countOfCabs() {
    let resp=this.service.getCountCabsOfType(this.cab);
    resp.subscribe((data:any) => this.message=data);
  }
}
