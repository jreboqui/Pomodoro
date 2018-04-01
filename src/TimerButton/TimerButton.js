import React from 'react';
import { Button } from 'react-bootstrap';
import { Panel } from 'react-bootstrap';
import { Row } from 'react-bootstrap';

const TimerButton = (props) => (
    <div className="row text-primary text-center" onClick={props.startTimer} style={{ paddingLeft:'30px'}}>
    <Row>
      <Button bsStyle="success">Start</Button>
    </Row>
    </div>
);

export default TimerButton;

