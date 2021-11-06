import { createState, State, StateMethodsDestroy } from '@hookstate/core';

export class BaseStore<T> {
  public state: State<T> & StateMethodsDestroy;

  protected initialState: T;

  constructor(initialState: T) {
    this.initialState = initialState;
    this.state = createState<T>(initialState);
  }

  protected setState = (state: Partial<T>) => {
    this.state.set(prevState => ({
      ...prevState,
      ...state,
    }));
  };

  public resetState = () => {
    this.setState(this.initialState);
  };
}
