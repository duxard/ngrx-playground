import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as PostActions from './actions';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { PostsService } from '../services/posts.service';
import { of } from 'rxjs';

@Injectable()
export class PostsEffects {
  getPosts$ = createEffect(() =>
    this.actions$.pipe(ofType(PostActions.getPosts), mergeMap(() => {
      return this.postsService.getPosts().pipe(
        map(posts => PostActions.getPostsSuccess({posts})),
        catchError(error =>
          of(PostActions.getPostsFailure({error: error.message}))
        )
      )
    }))
  );

  constructor(
    private actions$: Actions,
    private postsService: PostsService
  ) {}
}
