import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ProjectsService } from '../_services/projects.service';
import { Project } from '../_models/project';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule, CarouselModule
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  featuredProject = {} as Project;
  constructor(private titleService: Title, private projectsService: ProjectsService) {
    this.titleService.setTitle('Home | Chaitanya Bharat Shinge');
  }

  ngOnInit(): void {
    this.featuredProject = this.projectsService.getProjectById(0);
  }
}
