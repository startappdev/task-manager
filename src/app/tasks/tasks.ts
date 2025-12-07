import {Component, OnInit, signal} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {Observable} from 'rxjs';

import {TasksService} from './tasks.service';
import {Task} from './tasks.models';

@Component({
    selector: 'app-task',
    standalone: true,
    imports: [FormsModule, CommonModule],
    templateUrl: './tasks.html',
    styleUrl: './tasks.scss',
})
export class TasksComponent implements OnInit {
    isLoading = signal(false);
    tasks$!: Observable<Task[]>;
    newTask = {title: '', content: ''};
    displayNewTaskForm = false;

    constructor(
        private tasksService: TasksService
    ) {
    }

    ngOnInit() {
        this.loadTasks();
    }

    loadTasks() {
        this.isLoading.set(true);

        this.tasks$ = this.tasksService.getTasks();
        this.tasks$.subscribe({
            next: () => this.isLoading.set(false),
            error: () => this.isLoading.set(false),
        });
    }

    createTask() {
        if (!this.newTask.title.trim()) {
            return;
        }

        this.tasksService.createTask(this.newTask).subscribe({
            next: () => {
                this.newTask = {title: '', content: ''};
                this.loadTasks();
            },
            error: err => console.error(err),
        });
    }
}