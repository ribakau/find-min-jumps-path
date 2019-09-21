import React from 'react';
import './App.css';
import findMinJumpsPath from './findMinJumps/findMinJumps';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import ArrayInput from './ArrayInput';
import ResultStatus from './ResultStatus';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {arrayInput: []};
    this.handleArrayInputChange = this.handleArrayInputChange.bind(this);
  }

  handleArrayInputChange(newInput) {
    this.setState({arrayInput: newInput.split(',').map(Number)});
    console.log(this.state.arrayInput);
  }



  render() {
    const minJumpsPath = findMinJumpsPath(this.state.arrayInput);
    return (
      <Container>
        <Row>
          <Col>
            <ArrayInput onArrayInputChange={this.handleArrayInputChange} />
          </Col>
        </Row>
        <Row>
          <Col>
            <ResultStatus minJumpsPath={minJumpsPath}/>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default App;