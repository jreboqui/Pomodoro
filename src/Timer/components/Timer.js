import React from 'react';
import { Button } from 'react-bootstrap';
 import { Panel } from 'react-bootstrap';
import { Grid, Row, FormGroup } from 'react-bootstrap';
import TimerHeader from '../../TimerHeader/TimerHeader';
import TimerDisplay from '../../TimerDisplay/TimerDisplay';
import TimerConfig from '../../TimerConfig/TimerConfig';
import TimerButton from '../../TimerButton/TimerButton';
import moment from 'moment';

export class Timer extends React.Component
{
    constructor() {
        super();

        this.state = {
            currentTime: moment.duration(25, 'minutes'),
            baseTime: moment.duration(25, 'minutes'),
        };
    }

    
    render () {
    return (
        <Grid>
            <div className="container-fluid">
                <TimerHeader />
                <TimerDisplay currentTime={this.state.currentTime}/>
                <TimerButton />
                <TimerConfig />
            </div>
        </Grid>
                )
    }
}
export default Timer;