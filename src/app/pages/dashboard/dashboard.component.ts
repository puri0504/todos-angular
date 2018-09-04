import { Component, OnInit } from "@angular/core";
import { tasks } from '../../consts/mock-tasks'
import { Task } from '../../entities/task'

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html'
    // styleUrls: ['']
})

export class DashboardComponent implements OnInit {
    public tasks: Task[] = [];

    ngOnInit(): void {
        this.getTasks()
    }

    getTasks() {
        this.tasks = tasks
        console.log(tasks)
    }
}