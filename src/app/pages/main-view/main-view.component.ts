import { Component, OnInit } from '@angular/core';
import { Iboard } from 'src/app/interfaces/Iboard';

// services
import { boradTest } from 'src/app/services/mock-board';

@Component({
  selector: 'app-main-view',
  templateUrl: './main-view.component.html',
  styleUrls: ['./main-view.component.scss']
})
export class MainViewComponent implements OnInit {

  public boards: Iboard[] = boradTest
  public board: Iboard = this.boards[0]

  constructor() { }

  ngOnInit(): void {
  }

}
