import { NgModule } from '@angular/core';
import { NgxMasonryComponent } from './ops-masonry.component';
import { NgxMasonryDirective } from './ops-masonry.directive';

@NgModule({
  imports: [],
  declarations: [NgxMasonryComponent, NgxMasonryDirective],
  exports: [NgxMasonryComponent, NgxMasonryDirective]
})
export class NgxMasonryModule {}
