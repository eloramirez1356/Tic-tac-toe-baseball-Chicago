import { Component, OnInit } from '@angular/core';
import { StateService } from './../state.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public _stateService: StateService;

  constructor(stateService:StateService) {
    this._stateService = stateService;
  }

  ngOnInit() {
  }

}
