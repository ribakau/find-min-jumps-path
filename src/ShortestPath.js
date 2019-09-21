import React from 'react';

class ResultStatus extends React.Component {  
    render() {
      const isValid = this.props.minJumpsPath ? true : false;

      return (
        <div>
            {isValid &&
                <h5>The shortest path is: {this.props.minJumpsPath.toString()}</h5>
            }
        </div>
      );
    }
  }

  export default ResultStatus;