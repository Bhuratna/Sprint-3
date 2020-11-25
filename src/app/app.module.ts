import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomerRegistrationComponent } from './customer-registration/customer-registration.component';
import { SearchDeleteComponent } from './search-delete/search-delete.component';
import { CustomerRegistrationService } from './customer-registration.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CabBookingComponent } from './cab-booking/cab-booking.component';
import { CabCrudOperationsComponent } from './cab-crud-operations/cab-crud-operations.component';

@NgModule({
  declarations: [
    AppComponent,
    CustomerRegistrationComponent,
    SearchDeleteComponent,
    CabBookingComponent,
    CabCrudOperationsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [CustomerRegistrationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
