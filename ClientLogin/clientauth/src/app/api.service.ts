import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  baseUrl = 'http://127.0.0.1:8000/api/posts/';

  // private _posts = ['There is still hope','Let us have faith'];

  constructor(
    private httpClient: HttpClient
  ) { }

  getPosts(){
    return this.httpClient.get(this.baseUrl);
    
    // return this._posts;
  }
}
