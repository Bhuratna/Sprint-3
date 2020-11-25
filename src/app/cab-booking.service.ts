import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CabBookingService {

  constructor(private http:HttpClient) { }
  public doRegistration(cab:any){
    return this.http.post("http://localhost:8566/cab/add", cab, {responseType: 'text' as 'json'});
  }
  pu