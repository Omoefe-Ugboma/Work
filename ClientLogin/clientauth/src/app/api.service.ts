import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  baseUrl = 'http://127.0.0.1:8000/';
  basePostUrl = `${this.baseUrl}api/posts/`;
  // token = this.cookieService.get('mr-token');

  headers = new HttpHeaders({
   'Content-Type':'application/json'
  });

  // private _posts = ['There is still hope','Let us have faith'];

  constructor(
    private httpClient: HttpClient,
    private cookieService: CookieService
  ) { }

  getPosts(){
    return this.httpClient.get(this.basePostUrl, {headers: this.getAuthHeaders()}); 
    // return this._posts;
  }

  getPost(id: number){
    return this.httpClient.get(`${this.basePostUrl}${id}/`, {headers: this.getAuthHeaders()}); 
    // return this._posts;
  }

  createPost(title:string, description:string){
    const body = JSON.stringify({title, description});
    return this.httpClient.post(`${this.basePostUrl}`,body,{headers: this.getAuthHeaders()}); 
    // return this._posts;
  }

  updatePost(id:number, title:string, description:string){
    const body = JSON.stringify({title, description});
    return this.httpClient.put(`${this.basePostUrl}${id}/`,body,{headers: this.getAuthHeaders()}); 
    // return this._posts;
  }

  deletePost(id:number){
    return this.httpClient.delete(`${this.basePostUrl}${id}/`,{headers: this.getAuthHeaders()}); 
    // return this._posts;
  }
   
  ratePost(rate: number, postId: number){
    const body = JSON.stringify({stars:rate});
    return this.httpClient.post(`${this.basePostUrl}${postId}/rate_post/`, body, {headers:this.getAuthHeaders()});
  }


  loginUser(authData:any){
    const body = JSON.stringify(authData);
    return this.httpClient.post(`${this.baseUrl}auth/`, body, {headers:this.getAuthHeaders()});
  }

  registerUser(authData:any){
    const body = JSON.stringify(authData);
    return this.httpClient.post(`${this.baseUrl}api/users/`, body, {headers:this.headers});
  }

  getAuthHeaders(){
    const token = this.cookieService.get('mr-token');

    return new HttpHeaders({
     'Content-Type':'application/json',
     Authorization:`Token ${token}`
    });
  }

}
