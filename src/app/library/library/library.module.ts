import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BooksComponent } from '../books/books.component';
import { AuthorsComponent } from '../authors/authors.component';


@NgModule({
  declarations: [    
    BooksComponent,
    AuthorsComponent],
  imports: [
    CommonModule
  ],
  exports: [
    BooksComponent,
    AuthorsComponent]
})
export class LibraryModule { }
