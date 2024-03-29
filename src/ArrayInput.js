import React from 'react';
import Form from 'react-bootstrap/Form';

// Component provides the input field for the array.
class ArrayInput extends React.Component {
    constructor(props) {
      super(props);
      this.handleChange = this.handleChange.bind(this);
    }
  
    handleChange(e) {
      // Pass the input value to the parent component.
      this.props.onArrayInputChange(e.target.value);
    }
  
    render() {
      const array = this.props.array;
      return (
        <div>
            <h5>Enter an array of integers:</h5>
            <Form.Control
                size="lg"
                type="text"
                placeholder="e.g. 3, -1, 4, 0, ..."
                value={array}
                onChange={this.handleChange} />
        </div>
      );
    }
  }

  export default ArrayInput;