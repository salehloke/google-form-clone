import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Component, HostListener, Input, OnInit } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormGroup,
  FormGroupDirective,
} from '@angular/forms';
import { questionModel } from '../../shared/models/question.model';

@Component({
  selector: 'google-form-builder',
  templateUrl: './google-form-builder.component.html',
  styleUrls: ['./google-form-builder.component.scss'],
})
export class GoogleFormBuilderComponent implements OnInit {
  @Input() mainForm!: FormGroup;

  get questionListArray() {
    console.log('test');
    return this.mainForm.get('questionList') as FormArray;
  }

  onCardClick(element, event) {
    let test = event.srcElement as HTMLDivElement;
  }

  constructor(private rootFormGroup: FormGroupDirective) {}

  ngOnInit() {
    this.mainForm = this.rootFormGroup.control;
    console.log('mainForm', this.mainForm.get('questionList')['controls']);
  }

  dropCardElement(event: CdkDragDrop<string[]>) {
    console.log(this.mainForm);
    moveItemInArray(
      this.mainForm.get('questionList').value,
      event.previousIndex,
      event.currentIndex
    );
  }
}
