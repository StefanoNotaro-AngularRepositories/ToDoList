import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormArray } from '@angular/forms';
import { Item } from '../../common/item.model';
import * as _ from 'underscore';

@Component({
  selector: 'app-to-do',
  templateUrl: './to-do.component.html',
  styleUrls: ['./to-do.component.css'],
})
export class ToDoComponent implements OnInit {
  public toDoItems = [];

  public allTaskDone: boolean;

  public toDoGroup = new FormGroup({
    toDoItem: new FormControl(''),
    items: new FormArray(this.toDoItems),
  });

  constructor() {
    this.toDoItems.push(new FormControl({ checked: true, text: 'Test 1' }));
    this.toDoItems.push(new FormControl({ checked: false, text: 'Test 2' }));
  }

  ngOnInit(): void {
    this.checkAllTaskDone();
  }

  public addNewItem() {
    if (this.toDoGroup.controls.toDoItem.value) {
      this.toDoItems.push(new FormControl({ checked: false, text: this.toDoGroup.controls.toDoItem.value }));
      this.toDoGroup.controls.toDoItem.reset();
      this.checkAllTaskDone();
    }
  }

  public itemDone(item: Item) {
    item.checked = !item.checked;
    this.checkAllTaskDone();
  }

  public removeItem(i) {
    this.toDoItems.splice(i, 1);
    this.checkAllTaskDone();
  }

  public notCompletedElements(elements) {
    return elements.filter((x) => !x.value.checked);
  }

  public completedElements(elements) {
    return elements.filter((x) => x.value.checked);
  }

  private checkAllTaskDone() {
    this.allTaskDone = true;
    if (this.toDoItems.filter((x) => !x.value.checked).length !== 0) {
      this.allTaskDone = false;
    }
  }
}
