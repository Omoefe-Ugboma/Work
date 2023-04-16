import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl} from '@angular/forms'
import { ApiService } from '../api.service';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';
// interface TokenObj {
//   token:string
// }

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit{

  authForm = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
    filephoto: new FormControl('')
   });

registerMode = false;

constructor(
  private apiService: ApiService,
  private cookieService: CookieService,
  private router: Router
){}

 ngOnInit(): void {
   const mrToken = this.cookieService.get('mr-token');
    if(mrToken){
      this.router.navigate(['/posts']);
    }
 }

 saveForm(){
  if(!this.registerMode){
     this.loginUser();
  } else {
    this.apiService.registerUser(this.authForm.value).subscribe(
      result =>{
        this.loginUser();
      },
      error => console.log(error)
    );
  }
  // console.log(this.authForm.value)
 }

 loginUser(){
  this.apiService.loginUser(this.authForm.value).subscribe(
    (result: any) => {
      this.cookieService.set("mr-token", result.token);
      this.router.navigate(['/posts']);
    },
    error => console.log(error)
  );
 }

}
