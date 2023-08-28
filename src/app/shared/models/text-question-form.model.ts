import { AbstractControl, FormArray, FormGroup } from '@angular/forms';

export interface TextQuestionFormModel {
  id: AbstractControl<string | null>;
  orderNo: AbstractControl<number | null>;
  type: AbstractControl<string | null>;
  required: AbstractControl<boolean | null>;
  question: FormGroup<QuestionFormGroupModel>;
}

export interface QuestionFormGroupModel {
  text: AbstractControl;
  placeholder: AbstractControl;
  type: AbstractControl;
  selectedAnswer: AbstractControl;
  offeredAnswers: FormArray;
}

// id: ['q1'],
// orderNo: [2],
// type: ['question'],
// required: [true],
// question: this.fb.group({
//   text: [''],
//   placeholder: [''],
//   type: ['freeText'],
//   selectedAnswer: [''],
//   offeredAnswers: this.fb.array([]),
// }),
