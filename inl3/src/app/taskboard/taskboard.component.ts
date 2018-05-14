import { Component, Output, EventEmitter, Input } from '@angular/core';
import { UtilService } from '../util.service';

@Component({
  selector: 'task-board',
  templateUrl: './taskboard.component.html',
  styleUrls: ['./taskboard.component.css']
})



export class TaskboardComponent {


  status = this.utilityService.getStatusTypes();    //used to render headers for the tasklists

  @Input() toggle            //toggles taskform (if true)



  constructor(private utilityService: UtilService) {

  }


}
