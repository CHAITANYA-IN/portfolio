import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ProjectCardComponent } from '../project-card/project-card.component';
import { CommonModule } from '@angular/common';
import { Project } from '../../models/project';
import { ProjectsService } from '../../services/projects.service';
import { FormsModule } from '@angular/forms';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { Tag } from '../../models/tag';


@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [
    CommonModule, FormsModule, CollapseModule,
    ProjectCardComponent,
  ],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css'
})
export class PortfolioComponent implements OnInit {

  projects = {} as Project[];
  isCollapsed: boolean = true;
  filtering: boolean = false;
  c: boolean = false;
  django: boolean = false;

  constructor(private titleService: Title, private projectsService: ProjectsService) {
    this.titleService.setTitle('Portfolio | Chaitanya Bharat Shinge');
  }

  filter() {
    let filterTags: Tag[] = [];
    if(this.c) {
      filterTags.push(Tag.C);
    }
    if(this.django) {
      filterTags.push(Tag.DJANGO);
    }

    this.filtering = (filterTags.length > 0);
    this.projects = this.projectsService.getProjectsByFilter(filterTags);
  }

  resetFilters() {
    this.c = false;
    this.django = false;

    this.filtering = false;
    this.projects = this.projectsService.getProjects();
  }

  ngOnInit(): void {
    this.projects = this.projectsService.getProjects();
  }
}
