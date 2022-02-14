import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'form-question',
  templateUrl: './form-question.component.html',
  styleUrls: ['./form-question.component.css'],
})
export class FormQuestionComponent implements OnInit {
  @Input() elementModel;
  constructor() {}

  ngOnInit() {}

  dropRadioAnswer(event: CdkDragDrop<string[]>) {
    moveItemInArray(
      this.elementModel.question.offeredAnswers,
      event.previousIndex,
      event.currentIndex
    );
  }
}
