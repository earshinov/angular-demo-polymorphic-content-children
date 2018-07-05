import { BrowserModule } from '@angular/platform-browser';
import { Component, NgModule, forwardRef } from '@angular/core';
import { DemoLibModule, PolymorphicComponent } from 'demo-lib';;


@Component({
  selector: 'app-p',
  template: '<p><ng-content></ng-content></p>',
  providers: [
    {provide: PolymorphicComponent, useExisting: forwardRef(() => ParagraphComponent)}
  ]
})
export class ParagraphComponent extends PolymorphicComponent {
  identify(): string {
    return "ParagraphComponent";
  }
}


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
}


@NgModule({
  declarations: [ParagraphComponent, AppComponent],
  imports: [BrowserModule, DemoLibModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
