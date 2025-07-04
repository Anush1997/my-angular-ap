import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Import components, directives, pipes you want to share here
import { ScreenLoaderComponent } from './screen-loader/screen-loader.component';

@NgModule({
  declarations: [
    ScreenLoaderComponent,  // Declare your shared components here
  ],
  imports: [
    CommonModule,  // Includes common Angular directives like ngIf, ngFor
  ],
  exports: [
    ScreenLoaderComponent,  // Export to make it available in other modules/components
  ]
})
export class SharedModule {}
