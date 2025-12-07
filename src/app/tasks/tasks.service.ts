import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from "rxjs";

import {Task} from "./tasks.models";

@Injectable({
  providedIn: 'root',
})
export class TasksService {
  constructor(private http: HttpClient) {
  }

  getTasks(): Observable<Task[]> {
    return this.http.get<Task[]>('/api/tasks');
  }

  createTask(task: any) {
    return this.http.post('/api/task', task);
  }
}
