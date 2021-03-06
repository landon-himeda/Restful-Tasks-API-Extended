import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) {

  }

  getTasks() {
    return this._http.get('/tasks');
  }

  getOneTask() {
    return this._http.get('/tasks/5cddf2ee802e511f58336a69');
  }

  postNewTask(newTask) {
    return this._http.post("/tasks", newTask);
  }
}
