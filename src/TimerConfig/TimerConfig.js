import React from 'react';
import { Button } from 'react-bootstrap';
import { Panel } from 'react-bootstrap';
import { Row, FormGroup } from 'react-bootstrap';

const TimerConfig = () => (
    <div className="text-primary">
              <h2 className="text-center"> Set timer </h2>
              <FormGroup>
              <div className="form-group">
                <div className="col-sm-3">
                  <label htmlFor="hours">Hours</label>
                </div>
                <div className="col-sm-9">
                  <input id="minutes" className="form-control" type="number" />
                </div>
              </div>
              </FormGroup>
              <FormGroup>
              <div className="form-group">
                <div className="col-sm-3">
                  <label htmlFor="minutes">Minutes</label>
                </div>
                <div className="col-sm-9">
                  <input id="minutes" className="form-control" type="number" />
                </div>
              </div>
              </FormGroup>
              <FormGroup>
              <div className="form-group">
                <div className="col-sm-3">
                  <label htmlFor="seconds">Seconds</label>
                </div>
                <div className="col-sm-9">
                  <input id="seconds" className="form-control" type="number" />
                </div>
              </div>
              </FormGroup>
            </div>
);

export default TimerConfig;

