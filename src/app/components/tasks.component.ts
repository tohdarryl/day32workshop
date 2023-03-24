import { Component, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subject } from 'rxjs';
import { Task } from '../models';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent{

@Input()
tasks!: Task[]

@Output()
onModifyItem = new Subject<number>()

removeTaskFromList(idx: number) {
  console.info('selected: ', idx)
  this.tasks.splice(idx,1)
}

// Fire to Parent component
modifyTask(idx: number) {
  this.onModifyItem.next(idx)
}
}
