import { PostsStateInterface } from '../components/posts/types/postsState.interface';
import { ComplexCounterInterface } from '../components/complex-counter/complex-counter.model';

export interface AppStateInterface {
  posts: PostsStateInterface;
  count: number;
  complexCounter: ComplexCounterInterface
}
