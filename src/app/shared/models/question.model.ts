import { AbstractControl, FormGroup } from '@angular/forms';
import { IAnswerFormGroup, IAnswerValue } from './answer.model';

export interface questionModel {
  id?: string;
  orderNo: number;
  type: string;
  required: boolean;
  question: {
    text: string;
    placeholder?: string;
    type: string;
    offeredAnswers?: {
      questionCode?: string;
      orderNo: number;
      value: string;
      remarkAnswer?: boolean;
      remarkAnswerValue?: string;
    }[];
    otherAnswer?: boolean;
    otherAnswerValue?: string;
  };
}

export interface IQuestionValue {
  questionCode: number;
  questionDescription: string;
  questionSectionCode: number;
  questionInputTypeCode: number;
  questionInputTypeDescription: string;
  sequenceNo: number;
  parentAnswerCode: number;
  isOptional: boolean;
  isRoot: boolean;
  childQuestions: IQuestionValue[];
  answers: IAnswerValue[];
}

export interface IQuestionControls {
  questionCode: AbstractControl;
  questionDescription: AbstractControl;
  questionSectionCode: AbstractControl;
  questionInputTypeCode: AbstractControl;
  questionInputTypeDescription: AbstractControl;
  sequenceNo: AbstractControl;
  parentAnswerCode: AbstractControl;
  isOptional: AbstractControl;
  isRoot: AbstractControl;
  childQuestions: IQuestionFormGroup[];
  answers: IAnswerFormGroup[];
}

export interface IQuestionFormGroup extends FormGroup {
  value: IQuestionValue;
  controls: { IQuestionControls };
}
