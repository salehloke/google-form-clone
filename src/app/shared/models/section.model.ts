import { AbstractControl, FormGroup } from '@angular/forms';
import { IQuestionControls, IQuestionValue } from './question.model';

export interface ISectionFormGroup extends FormGroup {
  value: ISectionValue;
  controls: { ISectionControls };
}

export interface ISectionValue {
  questionSectionCode: number;
  questionSectionDescription: string;
  questionnaireCode: number;
  questions: IQuestionValue[];
}

export interface ISectionControls {
  questionSectionCode: AbstractControl;
  questionSectionDescription: AbstractControl;
  questionnaireCode: AbstractControl;
  questions: IQuestionControls[];
}
