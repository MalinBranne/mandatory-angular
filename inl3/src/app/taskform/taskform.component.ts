import { Component, EventEmitter, Output } from '@angular/core';
import { TaskService } from '../task.service';

@Component({
  selector: 'task-form',
  templateUrl: './taskform.component.html',         //taskforms role is to recive information from the user in order to send it to taskService where taskService
  styleUrls: ['./taskform.component.css']           //uses addTask() to a new task to the list
})


export class TaskformComponent {


  @Output() eventObject = new EventEmitter();        // To taskService 

  constructor(private taskService: TaskService) { }

  createTask(title, description) {
    this.taskService.addTask(title, description)
    this.eventObject.emit()
  }

}
