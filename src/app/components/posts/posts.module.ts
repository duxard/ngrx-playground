import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostsComponent } from './posts.component';
// import { StoreModule } from '@ngrx/store';
// import { postsReducer } from './store/reducers';
import { EffectsModule } from '@ngrx/effects';
import { PostsEffects } from './store/effects';



@NgModule({
  declarations: [PostsComponent],
  exports: [PostsComponent],
  imports: [
    CommonModule,
    // StoreModule.forFeature('posts', postsReducer),
    EffectsModule.forFeature([PostsEffects])
  ]
})
export class PostsModule { }
