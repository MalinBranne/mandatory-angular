import { Component, OnInit, OnDestroy, EventEmitter, Input, Output } from '@angular/core';
import { TaskService } from '../task.service';
import { StatusType } from '../constants';
import { UtilService } from '../util.service';

@Component({
  selector: 'task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent {
  @Input() task;
  @Output() statusChanged = new EventEmitter();


  constructor(private utilityService: UtilService) { }

  handleStatusChanged(status) {
    this.task.status = status               // replacing old status with new status sent in
    this.statusChanged.emit(this.task)    // emits the changed task to taskList
  }

}  
