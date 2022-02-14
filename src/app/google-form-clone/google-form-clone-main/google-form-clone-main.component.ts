import { Component, OnInit } from '@angular/core';
import { questionModel } from '../../models/question.model';

@Component({
  selector: 'google-form-clone-main',
  templateUrl: './google-form-clone-main.component.html',
  styleUrls: ['./google-form-clone-main.component.css'],
})
export class GoogleFormCloneMainComponent {
  active = 1;

  freeTextQuestion: questionModel = {
    id: 'q1',
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
    id: 'q2',
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
          remarkAnswer: true,
          remarkAnswerValue: 'idk',
        },
        {
          id: '02',
          orderNo: 2,
          value: 'second Answer',
          remarkAnswer: false,
          remarkAnswerValue: 'idk',
        },
        {
          id: '02',
          orderNo: 2,
          value: 'other',
          remarkAnswer: false,
          remarkAnswerValue: 'idk',
        },
      ],
    },
  };

  checkboxQuestion = {
    id: 'q3',
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
          remarkAnswer: true,
          remarkAnswerValue: 'idk',
        },
        {
          id: '02',
          orderNo: 2,
          value: 'second checkbox Answer',
          remarkAnswer: true,
          remarkAnswerValue: 'idk',
        },
        {
          id: '03',
          orderNo: 2,
          value: 'second checkbox Answer',
          remarkAnswer: false,
          remarkAnswerValue: 'idk',
        },
      ],
    },
  };

  cardElements = [
    this.freeTextQuestion,
    this.radioQuestion,
    this.checkboxQuestion,
  ];
}
