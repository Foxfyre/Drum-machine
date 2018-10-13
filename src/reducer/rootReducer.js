import { DISPLAY_SOUND } from "../actions/actionTypes";

const initialState = {
  soundName: ""
}

export default function(state = initialState, action) {
  switch(action.type) {
    case DISPLAY_SOUND: {
      const displaySound = action.payload;
      return {
        ...state,
        name: displaySound.soundName
      }
    }
    default: 
      return state;
  }

}