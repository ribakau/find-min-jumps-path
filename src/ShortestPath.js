import React from 'react';
import { ArcherContainer, ArcherElement } from 'react-archer';


// ShortestPath draws a directed graph representing the shortest path.
class ShortestPath extends React.Component {  
  render() {

    // Return empty div if the path is undefined
    if (this.props.minJumpsPath === undefined) {
      return(<div></div>);
    }

    const isValid = this.props.minJumpsPath.length > 0 ? true : false;
    const rowStyle = { margin: '30px 0', display: 'flex', justifyContent: 'space-between', }
    const array = isValid ? Array.from(this.props.minJumpsPath) : [];

    // Generate an array of PathNode elements from a simple integer array.
    const listItems = array.map((number, index) =>
      <PathNode key={index} id={index} value={number} isLastNode={index < array.length-1 ? false : true} />
    );

    return (
      <div>
        {isValid &&
          <div>
            <h5>The shortest path is:</h5>
            <ArcherContainer strokeColor='black' >
              <div style={rowStyle}>
                {listItems}
              </div>
            </ArcherContainer>
          </div>
        }
      </div>
    );
  }
}


// PathNode represents a single node in the ShortestPath graph.
class PathNode extends React.Component {
  render() {
    const boxStyle = { border: '2px solid #E8E9EA', backgroundColor: 'white', padding: '10px', borderRadius: '25%' };
    return (
      <ArcherElement
        id={this.props.id}
        relations={!this.props.isLastNode ? [{
          targetId: this.props.id + 1,
          targetAnchor: 'left',
          sourceAnchor: 'right',
        }] : []}>
        <div style={boxStyle}><b>{this.props.value}</b></div>
      </ArcherElement>
    );
  }
}

export default ShortestPath;