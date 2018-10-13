import React, { Component } from "react";
import { connect } from "react-redux";
import displaySound from "./actions/actions";
import "./css/squares.css";

class Square extends Component {
  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
    this.handlePress = this.handlePress.bind(this);
    this.sound = new Audio(this.props.url);
    this.myRef = React.createRef();
    document.addEventListener("keydown", e => this.handlePress(e));
  }

  onClick(e) {
    this.myRef.current.play();
    this.props.DISPLAY_SOUND(this.props.id);
  }

  handlePress(e) {
    if (e.keyCode === this.props.keyCode) {
      this.myRef.current.play();
      this.props.DISPLAY_SOUND(this.props.id);
    }
  }

  render() {
    return (
      <div className="drum-pad" id={this.props.id} onClick={this.onClick}>
        <audio
          src={this.props.url}
          className="clip"
          id={this.props.value}
          ref={this.myRef}
        >
          <source src={this.props.url} />
        </audio>
        {this.props.value}
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  DISPLAY_SOUND: soundName => dispatch(displaySound(soundName))
});

export default connect(
  null,
  mapDispatchToProps
)(Square);
