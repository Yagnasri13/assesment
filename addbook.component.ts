import { Component } from '@angular/core';

@Component({
  selector: 'app-addbook',
  templateUrl: './addbook.component.html',
  styleUrl: './addbook.component.css'
})
export class AddbookComponent {
  add : any = {  
    isbn : "",
    name : "",
    author : "",
    publication : "",
    details : "",
    quantity : "",
    price : "",
    
  };

  onSubmit() {
    alert("Form submitted successfully!");
  }
}
