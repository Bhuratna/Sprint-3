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
  public update(cab:any){
    return this.http.put("http://localhost:8566/cab/update/",cab);
  }
  public delete(cab:any){
    return this.http.delete("http://localhost:8566/cab/delete/",cab);
  }
  public getCabsOfType(cab:any){
    return this.http.delete("http://localhost:8566/cab/getCabsOfType/",cab);
  }
  public getCountCabsOfType(cab:any){
    return this.http.delete("http://localhost:8566/cab/getCountCabsOfType/",cab);
  }
}


