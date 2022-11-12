import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainViewComponent } from './main-view/main-view.component';

import  { DragDropModule } from '@angular/cdk/drag-drop';
import { BoardComponent } from './board/board.component'


@NgModule({
  declarations: [
    MainViewComponent,
    BoardComponent
  ],
  imports: [
    CommonModule,
    DragDropModule
  ],
  exports: [
    MainViewComponent
  ]
})
export class PagesModule { }
