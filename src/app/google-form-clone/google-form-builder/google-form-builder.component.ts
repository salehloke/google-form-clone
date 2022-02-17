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

  numberOfClicks = 0;
  // @HostListener('click', ['$event.target'])
  // onClick(btn) {
  //   console.log('ele', btn, 'number of clicks:', this.numberOfClicks++);
  // }

  onCardClick(element, event) {
    let test = event.srcElement as HTMLDivElement;
    console.log(element, test);
  }

  constructor(private rootFormGroup: FormGroupDirective) {}

  ngOnInit() {
    this.mainForm = this.rootFormGroup.control;
    console.log('question', this.mainForm);
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
