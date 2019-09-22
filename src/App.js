import React from 'react';
import './App.css';
import findMinJumpsPath from './findMinJumps/findMinJumps';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import ArrayInput from './ArrayInput';
import ResultStatus from './ResultStatus';
import ShortestPath from './ShortestPath';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isEmpty: true, arrayInput: []};
    this.handleArrayInputChange = this.handleArrayInputChange.bind(this);
  }

  handleArrayInputChange(stringInput) {
    // Set the isEmpty state
    this.setState({isEmpty: stringInput.length > 0 ? false : true});

    // Parse the array from a given string and save it as arrayInput
    let formatedInput = stringInput.trim();
    formatedInput = stringInput.endsWith(',') ? stringInput.slice(0, stringInput.length-1) : stringInput;
    this.setState({arrayInput: formatedInput.split(',').map(Number)});
  }

  render() {
    const minJumpsPath = findMinJumpsPath(this.state.arrayInput);
    return (
      <div>
        <nav className="title" ><h3>Find Min Jumps App</h3></nav>
        <Container>
          
          <Row className="arrayInput">
            <Col>
              <ArrayInput onArrayInputChange={this.handleArrayInputChange} />
            </Col>
          </Row>

          {!this.state.isEmpty &&
            <div>
              <Row className="resultStatus">
                <Col>
                  <ResultStatus minJumpsPath={minJumpsPath}/>
                </Col>
              </Row>
              <Row className="shortestPath">
                <Col>
                  <ShortestPath minJumpsPath={minJumpsPath}/>
                </Col>
              </Row>
            </div>
          }
          
        </Container>
      </div>
    );
  }
}

export default App;