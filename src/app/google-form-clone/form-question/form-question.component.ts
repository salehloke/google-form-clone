import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Component, Input, OnInit } from '@angular/core';
import { FormArray, FormGroup, FormGroupDirective } from '@angular/forms';

@Component({
  selector: 'form-question',
  templateUrl: './form-question.component.html',
  styleUrls: ['./form-question.component.css'],
})
export class FormQuestionComponent implements OnInit {
  @Input() questionFormGroup!: FormGroup;
  @Input() questionIndex: number;

  mainForm: FormGroup;
  constructor(public rootFormGroup: FormGroupDirective) {}

  ngOnInit() {
    this.mainForm = this.rootFormGroup.control;
    console.log('questionFormGroup', this.questionFormGroup);
  }

  addNew() {
    console.log('add');
  }

  deleteQ() {}

  dropRadioAnswer(event: CdkDragDrop<string[]>) {
    moveItemInArray(
      this.singleSelectionAnswers,
      event.previousIndex,
      event.currentIndex
    );
  }

  get questionList() {
    return this.mainForm.get('questionList') as FormArray;
  }

  get questionDetails() {
    return this.questionFormGroup.controls;
  }

  get questionType() {
    return this.questionFormGroup.get('question.type');
  }

  get singleSelectionAnswers() {
    return this.questionFormGroup.get('question.offeredAnswers')['controls'];
  }
}
