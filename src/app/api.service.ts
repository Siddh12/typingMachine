import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})

export class ApiService {

  constructor( private http: HttpClient) { }

  apicall(object : any){
    let url = "http://localhost:3000/email";
    return this.http.post(url, object)
  }
}
