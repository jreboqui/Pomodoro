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
            timerState: timerStates.NOT_SET,
            timer: null
        };

        this.setBaseTime = this.setBaseTime.bind(this);
        this.startTimer = this.startTimer.bind(this);
        this.reduceTimer = this.reduceTimer.bind(this);
        this.stopTimer = this.stopTimer.bind(this);
        this.resetTimer = this.resetTimer.bind(this);

    }

    setBaseTime(newBaseTime) {
        this.setState({
            baseTime: newBaseTime,
            currentTime: newBaseTime
        });
    }

    startTimer(){
        this.setState({
            timerState: timerStates.RUNNING,
            timer: setInterval(this.reduceTimer, 1000)
        });
    }

    stopTimer(){
        if (this.state.timer) {
            clearInterval(this.state.timer);
        }

        this.setState({
            timerState: timerStates.NOT_SET,
            timer: null,
            currentTime: moment.duration(this.state.baseTime)
        })
    }

    reduceTimer() {
        if (this.state.currentTime.get('hours') === 0
            && this.state.currentTime.get('minutes') === 0
            && this.state.currentTime.get('seconds') === 0
        ) {
            this.resetTimer();
            return;
        }
        
        const newTime = moment.duration(this.state.currentTime);
        newTime.subtract(1, 'second');

        this.setState({
            currentTime: newTime
        })
    }

    resetTimer(){
        if (this.state.timer) {
            clearInterval(this.state.timer);
        }

        this.setState({
            timerState: timerStates.COMPLETE,
            timer: null,
        })
    }
    render () {
    return (
        <Grid>
            <div className="container-fluid">
                <TimerHeader />
                <TimerDisplay currentTime={this.state.currentTime}/>
                <TimerButton startTimer={this.startTimer} timerState={this.state.timerState} stopTimer={this.stopTimer} resetTimer={this.resetTimer}/>
                {
                    (this.state.timerState !== timerStates.RUNNING && this.state.timerState !== timerStates.COMPLETE)
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