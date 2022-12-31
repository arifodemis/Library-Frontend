import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthorComponent } from './components/author/author.component';
import { CategoryComponent } from './components/category/category.component';
import { NaviComponent } from './components/navi/navi.component';
import { BookshelfComponent } from './components/bookshelf/bookshelf.component';
import { PublisherComponent } from './components/publisher/publisher.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthorComponent,
    CategoryComponent,
    NaviComponent,
    BookshelfComponent,
    PublisherComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
