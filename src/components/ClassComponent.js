import React from "react";

class ImageScanContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value : 0}; // Set the initial count state to zero, 0
    }
    // event handler
    incrementState = () => {this.setState({value : (this.state.value + 1)})};
    decrementState = () => {this.setState({value : (this.state.value - 1)})};
    
    render() {
      return (
        <div className="content-section">
            <label>Class Component</label>
            <div className="content-div">
                <button onClick={this.decrementState}> - </button>
                <h5>Value is {this.state.value}</h5>
                <button className="reset" onClick={this.incrementState}> + </button>
            </div>
            <button onClick={() => this.setState({value : 0})}>Reset</button>
        </div>
       );
    }
  }


export default ImageScanContainer;