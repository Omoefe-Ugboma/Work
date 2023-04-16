import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl} from '@angular/forms'
import { ApiService } from '../../api.service';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css']
})
export class PostFormComponent implements OnInit{
  postForm: any;
  id = null;
 
  @Output() postCreated = new EventEmitter<any>();
  @Output() postUpdated = new EventEmitter<any>();

  @Input() set post(val:any){
    this.id = val.id;
    this.postForm = new FormGroup({
      title: new FormControl(val.title),
      description: new FormControl(val.description)
     });
  };

 

  constructor(
    private apiService: ApiService
  ){}

  ngOnInit(): void {
    
  }

  formDisabled(){
    if(this.postForm.value.title.length && this.postForm.value.description.length){
      return false;
    }else{
      return false;
    }
  }

  saveForm(){
    // console.log(this.postForm.value);
    if(this.id){
      this.apiService.updatePost(this.id,
        this.postForm.value.title, this.postForm.value.description).subscribe(
          (result: any) => this.postUpdated.emit(result),
          error => console.log(error)
        );
    }else{
      this.apiService.createPost(
        this.postForm.value.title, this.postForm.value.description).subscribe(
          (result: any) => this.postCreated.emit(result),
          error => console.log(error)
        );
    }
  }
}
