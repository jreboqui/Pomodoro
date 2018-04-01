import React from 'react';
import { Button } from 'react-bootstrap';
 import { Panel } from 'react-bootstrap';
import { Grid, Row, FormGroup } from 'react-bootstrap';
import TimerHeader from '../../TimerHeader/TimerHeader';
import TimerDisplay from '../../TimerDisplay/TimerDisplay';
import TimerConfig from '../../TimerConfig/TimerConfig';
import TimerButton from '../../TimerButton/TimerButton';
import moment from 'moment';
import * as timerStates from '../../timerStates';


export class Timer extends React.Component
{
    constructor() {
        super();

        this.state = {
            currentTime: moment.duration(25, 'minutes'),
            baseTime: moment.duration(25, 'minutes'),
            timerState: timerStates.NOT_SET
        };

        this.setBaseTime = this.setBaseTime.bind(this);
        this.startTimer = this.startTimer.bind(this);
    }

    setBaseTime(newBaseTime) {
        this.setState({
            baseTime: newBaseTime,
            currentTime: newBaseTime
        });
    }

    startTimer(){
        this.setState({
            timerState: timerStates.RUNNING
        });
    }
    render () {
    return (
        <Grid>
            <div className="container-fluid">
                <TimerHeader />
                <TimerDisplay currentTime={this.state.currentTime}/>
                <TimerButton startTimer={this.startTimer}/>
                {
                    (this.state.timerState !== timerStates.RUNNING)
                    &&
                    (<TimerConfig 
                        baseTime={this.state.baseTime}
                        setBaseTime={this.setBaseTime}
                    />)
                }
            </div>
        </Grid>
                )
    }
}
export default Timer;