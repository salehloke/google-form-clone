import { AbstractControl, FormGroup } from '@angular/forms';
import { IQuestionFormGroup, IQuestionValue } from './question.model';

export interface IAnswerFormGroup extends FormGroup {
  value: IAnswerValue;
  controls: { IAnswerControls };
}

export interface IAnswerValue {
  answerChoiceCode: number;
  answerChoiceDescription: string;
  questionCode: number;
  isAnswered: boolean;
  answerRemark: string;
  childQuestions: IQuestionValue[];
}

export interface IAnswerControls {
  answerChoiceCode: AbstractControl;
  answerChoiceDescription: AbstractControl;
  questionCode: AbstractControl;
  isAnswered: AbstractControl;
  answerRemark: AbstractControl;
  childQuestions: IQuestionFormGroup[];
}
