import { NgModule } from '@angular/core';
import { OpsMasonryComponent } from './ops-masonry.component';
import { OpsMasonryDirective } from './ops-masonry.directive';

@NgModule({
  imports: [],
  declarations: [OpsMasonryComponent, OpsMasonryDirective],
  exports: [OpsMasonryComponent, OpsMasonryDirective]
})
export class OpsMasonryModule {}
