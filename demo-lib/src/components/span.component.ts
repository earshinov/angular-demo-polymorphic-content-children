import { PolymorphicComponent } from '../util';
import { forwardRef } from '@angular/core';
import { Component } from '@angular/core';

@Component({
  selector: 'dl-span',
  template: '<span><ng-content></ng-content></span>',
  providers: [
    { provide: PolymorphicComponent, useExisting: forwardRef(() => SpanComponent) }
  ]
})
export class SpanComponent extends PolymorphicComponent {
  // @override
  identify(): string {
    return "SpanComponent";
  }
}
