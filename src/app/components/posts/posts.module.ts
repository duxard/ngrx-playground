import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostsComponent } from './posts.component';
import { StoreModule } from '@ngrx/store';
import { reducers } from './store/reducers';



@NgModule({
  declarations: [PostsComponent],
  exports: [PostsComponent],
  imports: [
    CommonModule,
    StoreModule.forFeature('posts', reducers)
  ]
})
export class PostsModule { }
