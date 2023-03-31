import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.css']
})
export class PostDetailsComponent implements OnInit{

  @Input() post: any;
  @Output() updatePost = new EventEmitter();
  rateHovered = 0;

  constructor(private apiService:ApiService){}

  ngOnInit(): void {}

  rateHover(rate:any){
    this.rateHovered = rate;
  }

  rateClicked(rate:any){
   this.apiService.ratePost(rate, this.post.id).subscribe(
    result => this.getDetails(),
    error => console.log(error)
   );
  }

  getDetails(){
    this.apiService.getPost(this.post.id).subscribe(
      post =>{
        this.updatePost.emit(post);
        // console.log(result);
      },
      error => console.log(error)
    );
  }

}
