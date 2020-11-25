import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CabBookingComponent } from './cab-booking/cab-booking.component';
import { CustomerRegistrationComponent } from './customer-registration/customer-registration.component';
import { SearchDeleteComponent } from './search-delete/search-delete.component';

const routes: Routes = [
  {path:"customerRegister", component:CustomerRegistrationComponent},
  {path:"getAllCustomers", component:SearchDeleteComponent},
  {path:"getAllCab" , component:CabBookingComponent},
  {path: "cabRegister" , component:CabBookingComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
