import { getMeetingPoint, getMeetingPoints } from '@/services/meetingPoint.service';

const mutations = {
  setMeetingPoint(state, meetingPoint) {
    state.meetingPoint = meetingPoint;
  },
  setMeetingPoints(state, meetingPoints) {
    state.meetingPoints = meetingPoints;
  },
  setMeetingPointError(state, error) {
    state.meetingPointError = error;
  },
};

const actions = {
  async fetchMeetingPoint({ commit }, id) {
    try {
      const meetingPoint = await getMeetingPoint(id);
      commit('setMeetingPoint', meetingPoint);
    } catch (err) {
      commit('setMeetingPointError', err);
    }
  },
  async fetchMeetingPoints({ commit }) {
    try {
      const meetingPoints = await getMeetingPoints();
      commit('setMeetingPoints', meetingPoints);
    } catch (err) {
      commit('setMeetingPointError', err);
    }
  },
};

const getters = {
  meetingPoint: ({ meetingPoint }) => meetingPoint,
  meetingPoints: ({ meetingPoints }) => meetingPoints,
  meetingPointError: ({ meetingPointError }) => meetingPointError,
};

const state = () => ({
  meetingPoint: {},
  meetingPoints: [],
  meetingPointError: null,
});

export default {
  mutations,
  getters,
  actions,
  state,
};
