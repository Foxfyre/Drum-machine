import React, { Component } from "react";
import { connect } from "react-redux";
import Square from "./Square";
import "./css/drumMachine.css";

class DrumMachine extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displaySound: "Test"
    }
  };

  render() {
    return (
      <div className="drumMachine" id="drum-machine">
        <div className="drumButtons">
          <div className="drumRow">
            <Square value={"Q"} id={"kickHat"} keyCode={81} url={"https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3"}/>
            <Square value={"W"} id={"punchyKick"} keyCode={87} url={"https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3"}/>
            <Square value={"E"} id={"dryOhh"} keyCode={69} url={"https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3"}/>
          </div>
          <div className="drumRow">
            <Square value={"A"} id={"chord1"} keyCode={65} url={"https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3"}/>
            <Square value={"S"} id={"chord2"} keyCode={83} url={"https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3"}/>
            <Square value={"D"} id={"chord3"} keyCode={68} url={"https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3"}/>
          </div>
          <div className="drumRow">
            <Square value={"Z"} id={"heater1"} keyCode={90} url={"https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"}/>
            <Square value={"X"} id={"heater2"} keyCode={88} url={"https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3"}/>
            <Square value={"C"} id={"heater3"} keyCode={67} url={"https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3"}/>
          </div>
        </div>
        <div name="display" id="display"> { this.state.displaySound } </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  id: state.soundName
});

export default connect(
mapStateToProps,
null
)(DrumMachine);