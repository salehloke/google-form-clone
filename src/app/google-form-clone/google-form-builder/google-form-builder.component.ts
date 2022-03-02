import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Component, HostListener, Input, OnInit } from '@angular/core';
import { _ } from 'lodash';
import { ToastrService } from 'ngx-toastr';
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

  newTextFormGroup = this.fb.group({
    id: ['q1'],
    orderNo: [2],
    type: ['question'],
    required: [true],
    question: this.fb.group({
      text: [''],
      placeholder: [''],
      type: ['freeText'],
      selectedAnswer: [''],
      offeredAnswers: this.fb.array([]),
    }),
  });

  onCardClick(element, event) {
    let test = event.srcElement as HTMLDivElement;
  }

  constructor(
    private fb: FormBuilder,
    private rootFormGroup: FormGroupDirective,
    private toastrService: ToastrService
  ) {}

  ngOnInit() {
    this.mainForm = this.rootFormGroup.control;
    // console.log('mainForm', this.questionListArray);
    // this.mainForm.valueChanges.subscribe((value) => console.log(value));
    // console.log('mainForm', this.mainForm.get('questionList')['controls']);
  }

  dropCardElement(event: CdkDragDrop<string[]>) {
    moveItemInArray(
      this.questionListArray,
      event.previousIndex,
      event.currentIndex
    );

    // Update Order no in the form group
    this.updateOrderNo();
  }

  async addNewQuestion(i: number, type: string) {
    let questionList = this.mainForm.get('questionList') as FormArray;
    questionList.insert(i + 1, this.newTextFormGroup);

    // Update the order No
    await this.updateOrderNo();
  }

  duplicateQuestion(i: number) {
    // Insert next to the parent question
    let targetQ = this.questionList.at(i) as FormGroup;
    // using lodash to create deep clone of a FormGroup object
    let newFormGroup: FormGroup = _.cloneDeep(targetQ);
    this.questionList.insert(i + 1, newFormGroup);
    // Update the order No
    this.updateOrderNo();

    this.toastrService.info('Duplicate question');
  }

  deleteQuestion(i: number) {
    // remove the target in form array
    this.questionList.removeAt(i);
    this.updateOrderNo();
  }

  async updateOrderNo() {
    // Update question order no after every Remove/ Add / duplicate
    let questionList = this.mainForm.get('questionList')['controls'];
    await questionList.forEach((question, index) => {
      question.patchValue({
        orderNo: index,
      });
      console.log(`q${index}`, question.value);
    });
  }

  get questionListArray() {
    return this.mainForm.get('questionList')['controls'];
  }

  get questionList() {
    return this.mainForm.get('questionList') as FormArray;
  }
}
