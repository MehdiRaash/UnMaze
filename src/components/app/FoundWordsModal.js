import React, { Component } from "react";

class FoundWordsModal extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div id="myModal" className={"modal " + this.props.display}>

        <div className="modal-content w-full lg:w-1/2">
          <span className="close" onClick={this.props.hideModal}>&times;</span>
          <ul>
            {
              this.props.words && this.props.words.map((word, index) => <li key={word + index}>{word}</li>)
            }
          </ul>
        </div>

      </div>
    );
  }
}
export default FoundWordsModal;
