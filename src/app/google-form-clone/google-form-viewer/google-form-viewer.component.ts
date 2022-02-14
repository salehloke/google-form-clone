import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';

import { questionModel } from '../.././models/question.model';

@Component({
  selector: 'google-form-clone-viewer',
  templateUrl: './google-form-viewer.component.html',
  styleUrls: ['./google-form-viewer.component.css'],
  // schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class GoogleFormViewerComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  freeTextQuestion: questionModel = {
    orderNo: 1,
    type: 'question',
    required: true,
    question: {
      text: 'What is your favourite fruit?',
      placeholder: 'e.g. Apple, Tomato, etc',
      type: 'freeText',
    },
  };

  radioQuestion = {
    orderNo: 2,
    type: 'question',
    required: false,
    question: {
      text: 'Radio Question',
      type: 'radio',
      offeredAnswers: [
        {
          id: '01',
          orderNo: 1,
          value: 'first Answer',
        },
        {
          id: '02',
          orderNo: 2,
          value: 'second Answer',
        },
      ],
      otherAnswer: true,
      otherAnswerValue: 'random text here as an answer',
    },
  };

  checkboxQuestion = {
    orderNo: 3,
    type: 'question',
    required: false,
    question: {
      text: 'Checkbox',
      type: 'checkbox',
      offeredAnswers: [
        {
          id: '01',
          orderNo: 1,
          value: 'first checkbox Answer',
        },
        {
          id: '02',
          orderNo: 2,
          value: 'second checkbox Answer',
        },
      ],
      otherAnswerId: '003',
      otherAnswer: true,
      otherAnswerValue: 'random text here as an answer',
    },
  };

  cardElements = [
    this.freeTextQuestion,
    this.radioQuestion,
    this.checkboxQuestion,
  ];

  dropRadioAnswer(event: CdkDragDrop<string[]>) {
    moveItemInArray(
      this.radioQuestion.question.offeredAnswers,
      event.previousIndex,
      event.currentIndex
    );
  }

  dropCardElement(event: CdkDragDrop<string[]>) {
    console.log(this.cardElements);
    moveItemInArray(this.cardElements, event.previousIndex, event.currentIndex);
  }
}
