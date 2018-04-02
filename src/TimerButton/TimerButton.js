import React from 'react';
import { Button } from 'react-bootstrap';
import { Panel } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import * as timerStates from '../timerStates';

class TimerButton extends React.Component {
  
  constructor() {
    super();

    this.getButton = this.getButton.bind(this);
  }
  
  getButton(){
    if (this.props.timerState === timerStates.NOT_SET)
      return (
        <Row>
        <Button bsStyle="success" onClick={this.props.startTimer}>Start</Button>
        </Row>
      )

      if (this.props.timerState === timerStates.RUNNING)
        return (
          <Button bsStyle="danger" onClick={this.props.stopTimer}>Stop</Button>
        )

      if (this.props.timerState === timerStates.COMPLETE)
      return (
        <Button bsStyle="info" onClick={this.props.stopTimer}>Reset</Button>
      )


  }
  render() {
    return (
      <div className="row text-primary text-center" style={{ paddingLeft:'30px'}}>
        {this.getButton()}
      </div>

    );
  }
}
export default TimerButton;

