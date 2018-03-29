import React, { Component } from 'react';
import Timer from '../src/Timer/components/Timer';
// import Bootstrap from 'bootstrap/dist/css/bootstrap.css';
//import 'bootstrap/dist/css/bootstrap-theme.css';
import { Panel } from 'react-bootstrap';

class App extends Component {
  render() {
    return (
      <div className="panel panel-default app-content center-block">
      <Panel>
        <Panel.Body>
        <div className="panel-body">
          <Timer />
        </div>
        </Panel.Body>
      </Panel>
      </div>
    );
  }
}

export default App;
