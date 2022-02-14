import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DragDropModule } from '@angular/cdk/drag-drop';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { GoogleFormCloneModule } from './google-form-clone/google-form-clone.module';
import { NgbNav } from '@ng-bootstrap/ng-bootstrap/nav/nav.module';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    DragDropModule,
    GoogleFormCloneModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  declarations: [AppComponent, HelloComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent],
})
export class AppModule {}
