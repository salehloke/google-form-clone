import { Component, OnInit } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormGroup,
  FormGroupDirective,
} from '@angular/forms';
import { questionModel } from '../../shared/models/question.model';

@Component({
  selector: 'google-form-clone-main',
  templateUrl: './google-form-clone-main.component.html',
  styleUrls: ['./google-form-clone-main.component.css'],
  providers: [FormGroupDirective],
})
export class GoogleFormCloneMainComponent implements OnInit {
  active = 1;
  mainForm: FormGroup;

  constructor(public fb: FormBuilder) {
    let freeTextFormGroup = this.fb.group({
      id: ['q1'],
      orderNo: [1],
      type: ['question'],
      required: [true],
      question: this.fb.group({
        text: ['What is your favourite fruit?'],
        placeholder: ['e.g Apple, Tomato, etc'],
        type: ['freeText'],
      }),
    });

    let radioFormGroup = this.fb.group({
      id: ['q1'],
      orderNo: [1],
      type: ['question'],
      required: [true],
      question: this.fb.group({
        text: ['Radio Question'],
        type: ['singleSelection'],
        selectedAnswer: ['first Answer'],
        offeredAnswers: this.fb.array([
          {
            id: ['01'],
            orderNo: [1],
            value: ['first Answer'],
            remarkAnswer: [true],
            remarkAnswerValue: ['idk'],
          },
          {
            id: ['02'],
            orderNo: [2],
            value: ['second Answer'],
            remarkAnswer: [false],
            remarkAnswerValue: ['idk'],
          },
          {
            id: ['03'],
            orderNo: [3],
            value: ['third Answer'],
            remarkAnswer: [false],
            remarkAnswerValue: ['idk'],
          },
        ]),
      }),
    });
    this.mainForm = this.fb.group({
      questionList: this.fb.array([freeTextFormGroup, radioFormGroup]),
    });
  }

  ngOnInit() {}

}
