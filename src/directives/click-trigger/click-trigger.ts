import { Directive } from '@angular/core';

@Directive({
  selector: '[click-trigger]' // Attribute selector
})

export class ClickTriggerDirective {

  constructor() {
    console.log('Hello ClickTriggerDirective Directive');
  }

}
