import { getMeeting, getMeetings } from '@/services/meeting.service';

const mutations = {
  setMeeting(state, meeting) {
    state.meeting = meeting;
  },
  setMeetings(state, meetings) {
    state.meetings = meetings;
  },
  setMeetingError(state, error) {
    state.meetingError = error;
  },
};

const actions = {
  async fetchMeeting({ commit }, id) {
    try {
      const meeting = await getMeeting(id);
      commit('setMeeting', meeting);
    } catch (err) {
      commit('setMeetingError', err);
    }
  },
  async fetchMeetings({ commit }) {
    try {
      const meetings = await getMeetings();
      commit('setMeetings', meetings);
    } catch (err) {
      commit('setMeetingError', err);
    }
  },
};

const getters = {
  meeting: ({ meeting }) => meeting,
  meetings: ({ meetings }) => meetings,
  meetingError: ({ meetingError }) => meetingError,
};

const state = () => ({
  meeting: {},
  meetings: [],
  meetingError: null,
});

export default {
  mutations,
  getters,
  actions,
  state,
};
