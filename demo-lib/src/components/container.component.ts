import { PolymorphicComponent } from '../util/polymorphic-component.interface';
import { AfterContentInit, ContentChildren, QueryList } from '@angular/core';
import { Component } from '@angular/core';

@Component({
  selector: 'dl-container',
  template: '<ng-content></ng-content>',
})
export class ContainerComponent implements AfterContentInit {
  @ContentChildren(PolymorphicComponent)
  children: QueryList<PolymorphicComponent>;
  ngAfterContentInit(): void {
    var children = this.children.toArray();
    console.log(`Children: ${children.map(child => child.identify()).join(', ')}`);
  }
}
