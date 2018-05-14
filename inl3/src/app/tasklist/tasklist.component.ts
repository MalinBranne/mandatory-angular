import { Component, OnInit, Input } from '@angular/core';
import { UtilService } from '../util.service';
import { TaskService } from '../task.service';
import { StatusType } from '../constants';


@Component({
  selector: 'task-list',
  templateUrl: './tasklist.component.html',
  styleUrls: ['./tasklist.component.css']
})

export class TasklistComponent implements OnInit {

  subscription;
  tasks;

  @Input() status;

  constructor(private taskService: TaskService) { }

  ngOnInit() {

    let listStatus;

    for (let i in StatusType) {                                       // set the local variable to reflect the lists status
      StatusType[i] === this.status ? listStatus = this.status : null
    }

    this.subscription = this.taskService.getTasks(listStatus)       //get only the tasks  with the same status as this list (generated for each statustype)
      .subscribe(tasks => this.tasks = tasks)    //save ALL the tasks the current list is responsible for to the local variable tasks
  }

  handleStatusChanged($event) {            //triggered by the user in the task-component, saying a task has been changed, update the lists
    this.taskService.updateTask($event.id, $event.status)
  }

}
