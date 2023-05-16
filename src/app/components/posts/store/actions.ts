import { createAction, props } from '@ngrx/store';
import { Post } from '../services/posts.model';

export const getPosts = createAction('[Post] Get Posts');
export const getPostsSuccess = createAction(
  '[Post] Get Posts Success',
  props<{posts: Post[]}>()
);
export const getPostsFailure = createAction(
  '[Post] Get Posts Failure',
  props<{error: string}>()
);
