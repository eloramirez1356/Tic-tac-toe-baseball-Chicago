import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface State{
  turn: string,
  values: string[][]
}

@Injectable({
  providedIn: 'root'
})
export class StateService {

  private _state$: BehaviorSubject<State>;

  constructor() { 
    this._state$ = new BehaviorSubject({
      turn: 'SOX',
      values:[
        ['-', '-', '-'],
        ['-', '-', '-'],
        ['-', '-', '-']
      ]
    });
  }

  get state$(): BehaviorSubject<State>{
    return this._state$;
  }

  get state (): State {
    return this._state$.getValue();
  }

  set state (state: State){
    this._state$.next(state);
  }

  updateValue(row, col){
    if(this.state.values[row][col] === '-'){
      let newValue = this.state.turn === 'SOX' ? 'X' : '0';
      let newTurn = this.state.turn === 'SOX' ? 'CUBS' : 'SOX';
      this.state.values[row][col] = newValue;
      this.state.turn = newTurn;
      this.state = this.state;
    }
  }

  reset(){
    this.state = {
      turn: 'SOX',
      values: [
        ['-', '-', '-'],
        ['-', '-', '-'],
        ['-', '-', '-']
      ]
    }
  }
}
