import React from 'react';

// Component displays the minimum number of jumps needed to get to the end of array,
// if the input is valid and the end is reachable.
class ResultStatus extends React.Component {  
    render() {
      const isValid = this.props.minJumpsPath ? true : false;
      let status;

      if (isValid) {
          status = <p>The minimum number of jumps need to reach the end is: {this.props.minJumpsPath.length - 1}</p>
      } else {
          status = <p>The provided array is not valid.</p>
      }
      return (
        <div>
            {status}
        </div>
      );
    }
  }

  export default ResultStatus;