import { BehaviorSubject } from 'rxjs';
import { Observable } from "rxjs/Observable";
import { Task, StatusType } from './constants';

export class TaskService {


  taskList = [];
  taskId = 0;

  //*** add class properties for:
  // a task id counter
  // an internal array of Task objects
  // an instance of BehaviorSubject ***//

  private subject = new BehaviorSubject(this.taskList); // subject is taskList[] as default



  getTasks(status: StatusType): Observable<Task[]> { //the two props, status has to be an object following the design of statusType, and observable is an array with objects folowing the design of Task imported from constants
    return this.subject.asObservable() // subscribing to changes in taskList
      .map(tasks => tasks.filter(task => task.status === status));
  } // mapping over taskList-array and for every task we set prop task.status to the status used when calling the function


  updateTask(id: number, status: StatusType) {
    this.taskList.map(task => task.id === id ? task.status = status : task)      //maps over taskList to find the matching id with task to be updated
    this.updateSubscribers()                                                    //updating subscribers
  }

  addTask(title: string, description: string) {
    this.taskList.push(
      {
        id: ++this.taskId,
        status: StatusType.NotStarted,
        title: title,
        description: description,
      }
    );
    this.updateSubscribers()
  }

  //adding new task

  updateSubscribers() {
    this.subject.next(this.taskList)
    // .next() triggers all subscribers subscribing.
  }

}
