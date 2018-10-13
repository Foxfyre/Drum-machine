import { DISPLAY_SOUND } from "./actionTypes";

export const displaySound = content => ({
  type: DISPLAY_SOUND,
  payload: {
    name: content
  }
});
