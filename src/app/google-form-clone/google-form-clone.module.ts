import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GoogleFormCloneMainComponent } from './google-form-clone-main/google-form-clone-main.component';
import { GoogleFormViewerComponent } from './google-form-viewer/google-form-viewer.component';

@NgModule({
  imports: [CommonModule],
  declarations: [GoogleFormCloneMainComponent, GoogleFormViewerComponent],
})
export class GoogleFormCloneModule {}
