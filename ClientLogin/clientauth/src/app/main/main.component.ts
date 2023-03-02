import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit{

  posts: any = [];

  selectedPost = null;

  constructor(
    private apiService:ApiService
  ){}

  ngOnInit(): void {
    this.apiService.getPosts().subscribe(
      data =>{
        this.posts = data;
      },
      error => {
        console.log(error);
      }
    );
  }

  selectPost(post:any){
   this.selectedPost = post;
   console.log('Selected', this.selectedPost)
  }

}
