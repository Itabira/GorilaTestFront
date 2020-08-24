
import { environment } from './../../environments/environment';
import {HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';



@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  getInvestments(){
    return this.http.get(environment.backend + 'investments').toPromise();
  }

  postInvestment(data){
    return this.http.post(environment.backend + 'investments', data).toPromise();
  }

  deleteInvestiment(id){
    return this.http.delete(environment.backend + 'investments/' + id).toPromise();
  }

}


