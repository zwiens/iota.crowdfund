import {Component, Output, EventEmitter} from "@angular/core";
import {ProjectModel} from "../shared/models/project-model";
import {UUID} from "angular2-uuid";
import {ProjectService} from "../shared/services/project.service";
import {Router} from "@angular/router";

@Component({
    selector: 'create-page',
    template: `
        <form #form="ngForm" (ngSubmit)="onSubmit()">
            <div class="form-group" [ngClass]="{ 'has-error': title.invalid && title.touched }">
                <input type="text" class="form-control" name="title" placeholder="Title" required
                       [(ngModel)]="newProject.title" #title="ngModel">
                <span class="help-block" *ngIf="title.invalid && title.touched">Title is required.</span>
            </div>
            <div class="form-group" [ngClass]="{ 'has-error': description.invalid && description.touched }">
                <textarea rows="4" class="form-control" name="description" placeholder="Enter a description" required
                       [(ngModel)]="newProject.description" #description="ngModel"></textarea>
                <span class="help-block" *ngIf="description.invalid && description.touched">Description is required.</span>
            </div>
            <div class="form-group" [ngClass]="{ 'has-error': target.invalid && target.touched }">
                <input type="text" class="form-control" name="target" placeholder="Target Amount (in MIOTA)" required
                       [(ngModel)]="newProject.targetAmount" #target="ngModel">
                <span class="help-block" *ngIf="target.invalid && target.touched">Target amount is required.</span>
            </div>
            <button type="submit" class="btn btn-lg btn-block btn-primary" [disabled]="form.invalid">
                Create Project!
            </button>
        </form>
  `,
    styles: [`
        form   {
          padding-top: 20px;
          background: #ECF0F1;
          border-radius: 3px;
          margin-bottom: 30px;
        }
  `],
})


export class CreateComponent {
    constructor(
        private projectService: ProjectService,
        private router: Router){}

    @Output() projectCreated = new EventEmitter();
    newProject = new ProjectModel();

    onSubmit() {
        this.newProject.id = UUID.UUID();
        this.projectService.addProject(this.newProject);
        this.router.navigate(["/project", this.newProject.id]);
        this.newProject = new ProjectModel();//todo clear form
    }
}
