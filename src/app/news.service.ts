import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  apiUrl = "http://localhost:3000";
  currentArticle: any;
  constructor(public http: HttpClient) {}
  
  getActu(){
    return new Promise(resolve => {
      this.http.get(this.apiUrl+'/actu')
      .subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      })
    })
  }
  
}
