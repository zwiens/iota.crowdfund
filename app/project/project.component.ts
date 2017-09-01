import {Component, OnInit} from "@angular/core";
import { ActivatedRoute, ParamMap } from '@angular/router';
import {Location} from "@angular/common";
import 'rxjs/add/operator/switchMap';
import {ProjectModel} from "../shared/models/project-model";
import {ProjectService} from "../shared/services/project.service";

@Component({
    selector: "project-component",
    template: `
        <p>
            id: {{project.id}} title: {{project.title}} description: {{project.description}} amount: {{project.targetAmount}}
        </p>
    `,
    styles: [`
    `]
})

export class ProjectComponent implements OnInit{
    project: ProjectModel;

    constructor(
        private projectService: ProjectService,
        private route: ActivatedRoute,
        private location: Location
    ){}

    ngOnInit(): void {
        this.route.paramMap
            .switchMap((params: ParamMap) => this.projectService.getProject(params.get('id')))
            .subscribe(project => this.project = project);
    }

    goBack(): void {
        this.location.back();
    }
}