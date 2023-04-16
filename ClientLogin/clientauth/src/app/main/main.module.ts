import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';
import { ReactiveFormsModule } from '@angular/forms';

import { ApiService } from '../api.service'; 

import { PostDetailsComponent } from './post-details/post-details.component';
import { PostListComponent } from './post-list/post-list.component';
import { PostFormComponent } from './post-form/post-form.component';

const routes: Routes = [
  {path: 'posts', component: MainComponent}
];

@NgModule({
  declarations: [
    MainComponent,
    PostDetailsComponent,
    PostListComponent,
    PostFormComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ],
  providers:[
    ApiService
  ]
})
export class MainModule { }
