import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';


@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit{
   
  @Input() posts: any = []; 
  @Output() selectedPost = new EventEmitter<any>();
  @Output() editedPost = new EventEmitter<any>();
  @Output() createNewPost = new EventEmitter();
  @Output() deletedPost = new EventEmitter<any>();

  constructor(
    
  ){}

  ngOnInit(): void {}
  
  postClicked(post:any){
    this.selectedPost.emit(post);
  }

  editPost(post:any){
    this.editedPost.emit(post);
  }

  newPost(){
    this.createNewPost.emit();
  }
  deletePost(post:any){
    this.deletedPost.emit(post);
  }

}
