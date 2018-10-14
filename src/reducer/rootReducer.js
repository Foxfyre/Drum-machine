import { DISPLAY_SOUND } from "../actions/actionTypes";

const initialState = {
  soundName: "test"
}

export default function(state = initialState, action) {
  switch(action.type) {
    case DISPLAY_SOUND: {
      const displaySound = action.payload;
      return {
        soundName: displaySound.soundName
      }
    }
    default: 
      return state;
  }

}