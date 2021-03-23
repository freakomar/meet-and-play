import { createStore } from "vuex";
import meeting from './meeting'
import meetingPoint from './meetingPoint'
import placement from './placement'
import user from './user'

export default createStore({  
  modules: {
    meeting,
    meetingPoint,
    placement,
    user,
  },
});
