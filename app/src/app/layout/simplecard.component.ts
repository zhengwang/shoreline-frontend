import { Component, Input, ViewChild } from '@angular/core';

@Component({
  selector: 'SimpleCard',
  template: `
    <div class="rounded overflow-hidden shadow-lg">
      <div class="bg-slate-100 border-b px-3 py-3">
        <Label><i [className]="icon"></i> {{title}}</Label>
      </div>
      <div class="px-6 pt-4 pb-2">
        <ng-content></ng-content>
      </div>
    </div>
  `,
  styles: [
  ]
})
export class SimplecardComponent {
  @Input()
  title: any;

  @Input()
  icon: string;
}
