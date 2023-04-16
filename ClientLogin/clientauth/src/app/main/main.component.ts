import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit{

  posts: any = [];

  selectedPost = null;
  editedPost: any = null;

  constructor(
    private apiService:ApiService,
    private cookieService: CookieService,
    private router: Router
  ){}

  ngOnInit(): void {
    
    const mrToken = this.cookieService.get('mr-token');
    if(!mrToken){
      this.router.navigate(['/auth']);
    }else{
      this.apiService.getPosts().subscribe(
        data =>{
          this.posts = data;
        },
        error => {
          console.log(error);
        }
      );
    }
  }
  
  logout(){
    this.cookieService.delete('mr-token');
    this.router.navigate(['/auth']);
  }
  

  selectPost(post:any){
   this.selectedPost = post;
   this.editedPost = null;
  }

  editPost(post:any){
   this.editedPost = post;
   this.selectedPost = null;
  }

  createNewPost(){
   this.editedPost = {title:'', description:''};
   this.selectedPost = null;
  }

  deletedPost(post:any){
   this.apiService.deletePost(post.id).subscribe(
    data => {
      this.posts = this.posts.filter((pos: { id: any; }) => pos.id !== post.id);
    },
    error => console.log(error)
   );
  }

  postCreated(post: any){
    this.posts.push(post);
    this.editedPost = null;
  }

  postUpdated(post: any){
    const index = this.posts.findIndex((pos: { id: any; }) => pos.id === post.id);
    if(index >= 0){
      this.posts[index] = post;
    }
    this.editedPost = null;
  }
}
