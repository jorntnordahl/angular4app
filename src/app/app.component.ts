import { Component, ViewChild } from '@angular/core';
//import { GridsterConfig, GridsterItem }  from 'angular-gridster2';
//import { GridsterComponent, IGridsterOptions } from 'angular-gridster2';//./gridster/gridster.component';
//import { IGridsterOptions } from './gridster/IGridsterOptions';
//import { IGridsterDraggableOptions } from './gridster/IGridsterDraggableOptions';

import { GridsterConfig, GridsterItem }  from 'angular-gridster2';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //title = 'app';

  options: GridsterConfig;
  dashboard: Array<GridsterItem>;

  static itemChange(item, itemComponent) {
    console.info('itemChanged', item, itemComponent);
  }

  static itemResize(item, itemComponent) {
    console.info('itemResized', item, itemComponent);
  }

  ngOnInit() {
    this.options = {
      itemChangeCallback: AppComponent.itemChange,
      itemResizeCallback: AppComponent.itemResize,
    };

    /*this.dashboard = [
      {cols: 2, rows: 1, y: 0, x: 0},
      {cols: 2, rows: 2, y: 0, x: 2}
    ];*/
    this.dashboard = [
      {
        x: 0, y: 0,
        w: 1, h: 2,
        dragAndDrop: true,
        resizable: true,
        title: 'Basic form inputs 1'
      },
      {
        x: 1, y: 0, w: 3, h: 1,
        dragAndDrop: true,
        resizable: true,
        title: 'Basic form inputs 2'
      },
      {
        x: 1, y: 1, w: 2, h: 1,
        dragAndDrop: true,
        resizable: true,
        title: 'Basic form inputs 3'
      },
      {
        x: 3, y: 1, w: 1, h: 2,
        dragAndDrop: true,
        resizable: true,
        title: 'Basic form inputs 4'
      },
      {
        w: 1, h: 2,
        dragAndDrop: true,
        resizable: true,
        title: 'Basic form inputs x'
      }
    ];

  }

  changedOptions() {
    this.options.api.optionsChanged();
  }

  removeItem(item) {
    this.dashboard.splice(this.dashboard.indexOf(item), 1);
  }

  addItem() {
    this.dashboard.push({});
  }

}
