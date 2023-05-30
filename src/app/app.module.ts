import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { PostsModule } from './components/posts/posts.module';
import { CommonModule } from '@angular/common';
import { counterReducer } from './components/counter/store/reducers';
import { CounterModule } from './components/counter/counter.module';
import { postsReducer } from './components/posts/store/reducers';
import { ComplexCounterModule } from './components/complex-counter/complex-counter.module';
import { complexCounterReducer } from './components/complex-counter/store/reducers';
import { CyprusModule } from './components/cyprus/cyprus.module';
import { cyprusReducer } from './components/cyprus/store/reducers';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    PostsModule,
    CounterModule,
    ComplexCounterModule,
    CyprusModule,
    StoreModule.forRoot({
      count: counterReducer,
      posts: postsReducer,
      complexCounter: complexCounterReducer,
      cyprusInfo: cyprusReducer
    }, {}),
    EffectsModule.forRoot([]),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production,
      autoPause: true
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
