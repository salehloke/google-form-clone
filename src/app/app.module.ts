import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { GoogleFormCloneModule } from './google-form-clone/google-form-clone.module';

@NgModule({
  imports: [BrowserModule, FormsModule, DragDropModule, GoogleFormCloneModule],
  declarations: [AppComponent, HelloComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent],
})
export class AppModule {}
