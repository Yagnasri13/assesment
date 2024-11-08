import { Component } from '@angular/core';

@Component({
  selector: 'app-deletebook',
  templateUrl: './deletebook.component.html',
  styleUrl: './deletebook.component.css'
})
export class DeletebookComponent {
  books = new Array(12);

  deleteBook(index: number) {
    if (confirm("Are you sure you want to delete this book?")) {
      this.books.splice(index, 1);
    }
  }
}
