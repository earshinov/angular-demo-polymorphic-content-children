import { PolymorphicComponent } from '../util/polymorphic-component.interface';
import { forwardRef } from '@angular/core';
import { Component } from '@angular/core';

@Component({
  selector: 'dl-div',
  template: '<div><ng-content></ng-content></div>',
  providers: [
    { provide: PolymorphicComponent, useExisting: forwardRef(() => DivComponent) }
  ]
})
export class DivComponent {
  // @override
  identify(): string {
    return "DivComponent";
  }
}
