import { Injectable, Type } from '@angular/core';
import { Project } from '../models/project';
import { Tag } from '../models/tag';


@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  projects: Project[] = [
    {
      id: 0,
      name: 'Proxy Authenticator',
      summary: 'Integrating multiple Authentication Backends in Proxy IITB Authorizer',
      tags: [Tag.DJANGO, Tag.EJS, Tag.JS, Tag.CSS],
      sourceCodeURL: 'github.com/CHAITANYA-IN/iitb-proxy',
      demoURL: '',
      pictures: [
        "../../assets/images/projects/0/1.png",
        "../../assets/images/projects/0/2.png",
        "../../assets/images/projects/0/3.png",
      ],
      description: 'Integrating multiple Authentication Backends in Proxy IITB Authorizer',
    },
    {
      id: 1,
      name: 'Programming Autograder',
      summary: 'Designed programming autograder in different ways and analyzed its performance',
      tags: [Tag.C, Tag.SQLITE, Tag.SHELL],
      sourceCodeURL: 'github.com/CHAITANYA-IN/autograding-client-sever',
      demoURL: '',
      pictures: [
        "../../assets/images/projects/1/1.png",
        "../../assets/images/projects/1/2.png",
        "../../assets/images/projects/1/3.png",
      ],
      description: 'Designing programming autograder and analyzing its performance',
    },
    {
      id: 2,
      name: 'curabl',
      summary: 'Virtual Health Clinic',
      tags: [Tag.REACTJS, Tag.HTML, Tag.CSS, Tag.NODEJS, Tag.EXPRESSJS, Tag.MONGO],
      sourceCodeURL: 'github.com/CHAITANYA-IN/curabl',
      demoURL: '',
      pictures: [
        "../../assets/images/projects/2/1.png",
        "../../assets/images/projects/2/2.png",
        "../../assets/images/projects/2/3.png",
      ],
      description: 'Virtual Health Clinic',
    },
  ];

  constructor() { }

  getProjects() : Project[] {
    return this.projects;
  }

  getProjectById(id: number) : Project {
    let project = this.projects.find(project => project.id === id);
    if (project === undefined) {
      throw new TypeError(`Project with id=${id} not found`);
    }
    return project;
  }

  getProjectsByFilter(filterTags: Tag[]) : Project[] {
    let filteredProjects: Project[] = [];
    this.projects.forEach((project) => {
      let foundAll = true;
      filterTags.forEach((filterTag) => {
        if(project.tags.includes(filterTag) == false) {
          foundAll = false;
        }
      });
      if(foundAll) {
        filteredProjects.push(project);
      }
    })
    return filteredProjects;
  }
}
