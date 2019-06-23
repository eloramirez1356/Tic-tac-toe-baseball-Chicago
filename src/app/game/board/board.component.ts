import { Component, OnInit } from '@angular/core';
import { StateService } from './../state.service';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {

  private _values: string[][] = [
    ['_', '_', '_'],
    ['_', '_', '_'],
    ['_', '_', '_']
  ];

  constructor(stateService: StateService) {
    this._values = stateService.state.values;
  }

  ngOnInit() {
  }

}
