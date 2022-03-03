import { AbstractControl, FormGroup } from '@angular/forms';
import {
  ISectionControls,
  ISectionFormGroup,
  ISectionValue,
} from './section.model';

export interface IQuestionnaireValue {
  questionnaireCode: number;
  questionnaireDescription: string;
  questionSections: ISectionValue[];
}

export interface IQuestionnaireControls {
  questionnaireCode: AbstractControl;
  questionnaireDescription: AbstractControl;
  questionSections: ISectionControls[];
}

export interface IQuestionnaireFormGroup extends FormGroup {
  value: IQuestionnaireValue;
  controls: { IQuestionnaireControls };
}
