import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit{
   
  posts: any = []; 

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
}
