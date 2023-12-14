import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'Film',
  template: `
    <AppHeader title="dash" />
    <div class="grid grid-cols-1 p-4 space-y-8 lg:gap-8 lg:space-y-0 lg:grid-cols-3">
      <Card>
        <table #ref_table class="display responsive"></table>
      </Card>
    </div>

  `,
  styles: []
})
export class Film implements AfterViewInit {
  @ViewChild('ref_table') ref_tbl: ElementRef;
  $ = (window as any).jQuery;
  dataSet: any;

  constructor() {
    this.dataSet = [['Tiger Nixon', 'System Architect', 'Edinburgh', '5421', '2011/04/25', '$320,800'],
    ['Garrett Winters', 'Accountant', 'Tokyo', '8422', '2011/07/25', '$170,750'],
    ['Ashton Cox', 'Junior Technical Author', 'San Francisco', '1562', '2009/01/12', '$86,000']];
  }

  ngAfterViewInit(): void {

    (this.$(this.ref_tbl.nativeElement) as any).DataTable({
      columns: [
        { title: 'Name' },
        { title: 'Position' },
        { title: 'Office' },
        { title: 'Extn.' },
        { title: 'Start date' },
        { title: 'Salary' }
      ],
      data: this.dataSet
    });
  }
}
