import { Component, Input } from '@angular/core';
import { Project } from '../../models/project';
import { CommonModule } from '@angular/common';
import { BsModalRef, BsModalService, ModalModule, ModalOptions } from 'ngx-bootstrap/modal';
import { ProjectModalComponent } from '../project-modal/project-modal.component';

@Component({
  selector: 'app-project-card',
  standalone: true,
  imports: [ CommonModule, ModalModule ],
  templateUrl: './project-card.component.html',
  styleUrl: './project-card.component.css'
})
export class ProjectCardComponent {
  @Input() project = {} as Project;
  bsModelRef?: BsModalRef;

  constructor(private modalService: BsModalService) {

  }

  openProjectModal() {
    const modalOptions: ModalOptions = {
      class: 'modal-lg',
      initialState: {
        project: this.project,
      },
    }
    this.bsModelRef = this.modalService.show(ProjectModalComponent, modalOptions);
  }
}
