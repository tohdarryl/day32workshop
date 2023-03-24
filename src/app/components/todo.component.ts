import { Component, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Subject } from 'rxjs';
import { Task } from '../models';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit{

  form!:FormGroup

  constructor(private fb: FormBuilder){ }

  ngOnInit(): void {
      this.form = this.fb.group({
        description: this.fb.control<string>('', [Validators.required, Validators.minLength(5)]),
        priority: this.fb.control<string>('', [Validators.required]),
        due: this.fb.control<Date>(new Date(), [Validators.required])
      })
  }

  @Output()
  onNewTask= new Subject<Task>()

  addTask(){
    const task = this.form.value as Task
    console.log('>>> task: ', task)
    this.onNewTask.next(task)
    this.form.reset()
  }

  // task from Parent to be edited
  @Input()
  task?: Task 

  
 
  
}
