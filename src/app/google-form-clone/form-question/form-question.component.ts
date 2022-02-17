import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormGroupDirective } from '@angular/forms';

@Component({
  selector: 'form-question',
  templateUrl: './form-question.component.html',
  styleUrls: ['./form-question.component.css'],
})
export class FormQuestionComponent implements OnInit {
  @Input() questionFormGroup?: FormGroup;
  @Input() questionIndex: number;

  constructor(public rootFormGroup: FormGroupDirective) {}

  ngOnInit() {
    this.questionFormGroup = this.rootFormGroup.control;
    console.log('questionFormGroup', this.questionFormGroup);
  }

  addNewQuestion() {
    console.log('add');
  }

  dropRadioAnswer(event: CdkDragDrop<string[]>) {
    moveItemInArray([], event.previousIndex, event.currentIndex);
  }
}
