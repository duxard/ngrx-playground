import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';
import { Post } from './posts.model';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  getPosts(): Observable<Post[]> {
    const posts = [
      { title: 'first', id: 1 },
      { title: 'second', id: 2 },
      { title: 'third', id: 3 },
    ];

    return of(posts).pipe(delay(1500));
  }
}
