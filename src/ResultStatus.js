import React from 'react';

// Component displays the minimum number of jumps needed to get to the end of array,
// if the input is valid and the end is reachable.
class ResultStatus extends React.Component {  
    render() {
      const isValid = this.props.minJumpsPath ? true : false;
      let status;

      if (isValid) {
          status = <h5>The minimum number of jumps needed to reach the end is: {this.props.minJumpsPath.length - 1}</h5>
      } else {
          status = <h5>The provided array is not valid.</h5>
      }
      return (
        <div>
            {status}
        </div>
      );
    }
  }

  export default ResultStatus;