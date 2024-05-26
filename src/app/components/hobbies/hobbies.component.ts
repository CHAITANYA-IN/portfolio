import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-hobbies',
  standalone: true,
  imports: [],
  templateUrl: './hobbies.component.html',
  styleUrl: './hobbies.component.css'
})
export class HobbiesComponent {
  constructor(private titleService: Title) {
    this.titleService.setTitle('Hobbies | Chaitanya Bharat Shinge');
  }
}
