import { getPlacement, getPlacements } from '@/services/placement.service';

const mutations = {
  setPlacement(state, placement) {
    state.placement = placement;
  },
  setPlacements(state, placements) {
    state.placements = placements;
  },
  setPlacementError(state, error) {
    state.placementError = error;
  },
};

const actions = {
  async fetchPlacement({ commit }, id) {
    try {
      const placement = await getPlacement(id);
      commit('setPlacement', placement);
    } catch (err) {
      commit('setPlacementError', err);
    }
  },
  async fetchPlacements({ commit }) {
    try {
      const placements = await getPlacements();
      commit('setPlacements', placements);
    } catch (err) {
      commit('setPlacementError', err);
    }
  },
};

const getters = {
  placement: ({ placement }) => placement,
  placements: ({ placements }) => placements,
  placementError: ({ placementError }) => placementError,
};

const state = () => ({
  placement: {},
  placements: [],
  placementError: null,
});

export default {
  mutations,
  getters,
  actions,
  state,
};
