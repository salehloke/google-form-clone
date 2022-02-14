import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'google-form-clone-model',
  templateUrl: './google-form-clone-model.component.html',
  styleUrls: ['./google-form-clone-model.component.css'],
})
export class GoogleFormCloneModelComponent implements OnInit {
  @Input() parentQuestions;

  constructor() {}

  ngOnInit() {}
}
