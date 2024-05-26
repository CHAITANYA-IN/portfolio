import { CommonModule } from '@angular/common';
import { Component, Renderer2 } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { AccordionModule } from 'ngx-bootstrap/accordion';

@Component({
  selector: 'app-resume',
  standalone: true,
  imports: [
    CommonModule,
    AccordionModule,
  ],
  templateUrl: './resume.component.html',
  styleUrl: './resume.component.css'
})
export class ResumeComponent {

  isWorkExperienceSectionOpen: boolean = false;
  isEducationSectionOpen: boolean = false;
  isCertificationsSectionOpen: boolean = false;
  isSkillsSectionOpen: boolean = false;

  constructor(private titleService: Title, private renderer: Renderer2) {
    this.titleService.setTitle('Resume | Chaitanya Bharat Shinge');
  }

  downloadFile() {
    const link = this.renderer.createElement('a');
    link.setAttribute('target', '_blank');
    link.setAttribute('href', '../../assets/pdf/resume/Chaitanya Bharat Shinge.pdf');
    link.setAttribute('download', 'Chaitanya Bharat Shinge.pdf');
    link.click();
    link.remove();
  }
}
