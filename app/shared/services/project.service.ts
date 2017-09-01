import {Injectable} from "@angular/core";
import {ProjectModel} from "../models/project-model";

@Injectable()
export class ProjectService{
    projects: ProjectModel[] = [];

    addProject(project: ProjectModel): void{
        this.projects.push(project);
    }

    getProject(id:string): Promise<ProjectModel> {
        return Promise.resolve(this.projects.find(project => project.id === id));
    }
}