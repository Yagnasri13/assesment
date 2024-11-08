import { Component } from '@angular/core';

@Component({
  selector: 'app-viewbook',
  templateUrl: './viewbook.component.html',
  styleUrl: './viewbook.component.css'
})
export class ViewbookComponent {
  books = new Array(12);
}
