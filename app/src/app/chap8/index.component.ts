import { AfterViewInit, Component, QueryList, ViewChild, ViewChildren, ViewEncapsulation } from '@angular/core';
import { ChildComponent } from './child.component';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styles: [],
  // encapsulation: ViewEncapsulation.ShadowDom
})
export class IndexComponent implements AfterViewInit {
  @ViewChild('child1')
  firstChild: ChildComponent;

  @ViewChildren(ChildComponent)
  allChildren: QueryList<ChildComponent>;

  ngAfterViewInit(): void {
  }

  greetAllChildren() {
    this.allChildren.forEach(child => child.greet());
  }
}
