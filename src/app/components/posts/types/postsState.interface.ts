import { Post } from '../services/posts.model';

export interface PostsStateInterface {
  isLoading: boolean;
  posts: Post[];
  error: string | null;
}
