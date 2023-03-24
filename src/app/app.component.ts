import { Component } from '@angular/core';
import { Task } from './models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'day32workshop';

  taskList: Task[] = []

  selectedTask?: Task

  addToTasks(task: Task){
    console.info('>>> task received at Parent: ', task)
    this.taskList.push(task)
    console.log('>>> current task list: ', this.taskList)
  }

  taskModify(idx: number) {
    this.selectedTask = this.taskList[idx]
    console.log('selectedTask: ', this.selectedTask)
  }

}
