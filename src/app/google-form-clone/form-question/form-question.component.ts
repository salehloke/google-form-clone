import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'form-question',
  templateUrl: './form-question.component.html',
  styleUrls: ['./form-question.component.css'],
})
export class FormQuestionComponent implements OnInit {
  @Input() elementModel;
  @Input() parentForm?: FormGroup;

  constructor() {}

  ngOnInit() {
    console.log(this.elementModel);
  }

  dropRadioAnswer(event: CdkDragDrop<string[]>) {
    moveItemInArray(
      this.elementModel.question.offeredAnswers,
      event.previousIndex,
      event.currentIndex
    );
  }
}
