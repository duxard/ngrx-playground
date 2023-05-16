import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import * as PostActions from './store/actions';
import { Observable } from 'rxjs';
import { errorSelector, isLoadingSelector, postsSelector } from './store/selectors';
import { AppStateInterface } from '../../types/appState.interface';
import { Post } from './services/posts.model';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {

  isLoading$: Observable<boolean>;
  error$:  Observable<string | null>;
  posts$:  Observable<Post[]>;

  constructor(private store: Store<AppStateInterface>) {
    this.isLoading$ = this.store.pipe(select(isLoadingSelector));
    this.error$ = this.store.pipe(select(errorSelector));
    this.posts$ = this.store.pipe(select(postsSelector));
  }

  ngOnInit(): void {
    this.store.dispatch(PostActions.getPosts());
  }

}
