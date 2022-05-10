import React, { Component } from 'react';

export default class CountPeople extends Component {
    constructor(props){
        super(props);
        this.state = {
            entryCount: 0,
            exitCount: 0,
        };
    }
    updateEntry(){
        this.setState((prevState) => ({ entryCount: prevState.entryCount + 1}));
    }
    updateExit(){
        this.setState((prevState) => ({ exitCount: prevState.exitCount + 1}));
    }
  render() {
    return (
      <div className='btn-container'>
          <div className='btn-left'>
              <button onClick={this.updateEntry.bind(this)}>Login</button>
              <span>{this.state.entryCount} People Entered!</span>
          </div>
          <div className='btn-right'>
              <button onClick={this.updateExit.bind(this)}>Exit</button>
              <span>{this.state.exitCount} People Exited!</span>
          </div>
      </div>
    )
  }
}
