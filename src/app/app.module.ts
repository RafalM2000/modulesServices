import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BooksComponent } from './library/books/books.component';
import { AuthorsComponent } from './library/authors/authors.component';

@NgModule({
  declarations: [
    AppComponent,
    BooksComponent,
    AuthorsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
