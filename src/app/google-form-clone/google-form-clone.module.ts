import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DragDropModule } from '@angular/cdk/drag-drop';

import { GoogleFormCloneMainComponent } from './google-form-clone-main/google-form-clone-main.component';
import { GoogleFormViewerComponent } from './google-form-viewer/google-form-viewer.component';

const COMPONENTS = [GoogleFormCloneMainComponent, GoogleFormViewerComponent];

@NgModule({
  imports: [CommonModule, DragDropModule],
  exports: [COMPONENTS],
  declarations: [COMPONENTS],
})
export class GoogleFormCloneModule {}
