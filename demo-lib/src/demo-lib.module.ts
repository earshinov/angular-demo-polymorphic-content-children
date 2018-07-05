import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

// (I) ERROR in : Unexpected value 'undefined' exported by the module 'DemoLibModule in <...>/demo-app/node_modules/demo-lib/demo-lib.d.ts'
//import { SpanComponent, DivComponent, ContainerComponent } from './components';
import { ContainerComponent } from './components/container.component';
import { DivComponent } from './components/div.component';
import { SpanComponent } from './components/span.component';

@NgModule({
  declarations: [SpanComponent, DivComponent, ContainerComponent],
  imports: [CommonModule],
  exports: [SpanComponent, DivComponent, ContainerComponent],
})
export class DemoLibModule {
}
