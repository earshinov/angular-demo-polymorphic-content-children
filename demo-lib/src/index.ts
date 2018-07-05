import { CommonModule } from '@angular/common';
import { NgModule, AfterContentInit, ContentChild, ContentChildren, QueryList, forwardRef } from '@angular/core';


import { Component } from '@angular/core';


export abstract class PolymorphicComponent {
  abstract identify(): string;
}


@Component({
  selector: 'dl-span',
  template: '<span><ng-content></ng-content></span>',
  providers: [
    {provide: PolymorphicComponent, useExisting: forwardRef(() => SpanComponent)}
  ]
})
export class SpanComponent extends PolymorphicComponent {
  // @override
  identify(): string {
    return "SpanComponent";
  }
}


@Component({
  selector: 'dl-div',
  template: '<div><ng-content></ng-content></div>',
  providers: [
    {provide: PolymorphicComponent, useExisting: forwardRef(() => DivComponent)}
  ]
})
export class DivComponent {
  // @override
  identify(): string {
    return "DivComponent";
  }
}


@Component({
  selector: 'dl-container',
  template: '<ng-content></ng-content>',
})
export class ContainerComponent implements AfterContentInit {

  @ContentChildren(PolymorphicComponent) children: QueryList<PolymorphicComponent>;

  ngAfterContentInit(): void {
    var children = this.children.toArray();
    console.log(`Children: ${children.map(child => child.identify()).join(', ')}`);
  }
}


@NgModule({
  declarations: [SpanComponent, DivComponent, ContainerComponent],
  imports: [CommonModule],
  providers: [],
  exports: [SpanComponent, DivComponent, ContainerComponent],
})
export class DemoLibModule { }
