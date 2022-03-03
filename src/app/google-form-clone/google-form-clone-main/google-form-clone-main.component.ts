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
        selectedAnswer: [''],
        offeredAnswers: this.fb.array([]),
      }),
    });

    let titleFormGroup = this.fb.group({
      id: ['q1'],
      orderNo: [0],
      type: ['title'],
      required: [true],
      title: this.fb.group({
        text: ['AMLCFT'],
        description: ['question title'],
        type: ['title'],
      }),
    });

    let radioFormGroup = this.fb.group({
      id: ['q1'],
      orderNo: [2],
      type: ['question'],
      required: [true],
      question: this.fb.group({
        text: ['Radio Question'],
        type: ['singleSelection'],
        selectedAnswer: ['first Answer'],
        offeredAnswers: this.fb.array([
          this.fb.group({
            id: ['01'],
            orderNo: [0],
            value: ['Yes'],
            remarkAnswer: [false],
            remarkAnswerValue: [''],
          }),
          this.fb.group({
            id: ['02'],
            orderNo: [1],
            value: ['No'],
            remarkAnswer: [false],
            remarkAnswerValue: [''],
          }),
          this.fb.group({
            id: ['03'],
            orderNo: [2],
            value: ['Others'],
            remarkAnswer: [true],
            remarkAnswerValue: [''],
          }),
        ]),
      }),
    });
    this.mainForm = this.fb.group({
      questionList: this.fb.array([
        titleFormGroup,
        freeTextFormGroup,
        radioFormGroup,
      ]),
    });
  }

  ngOnInit() {}
}
