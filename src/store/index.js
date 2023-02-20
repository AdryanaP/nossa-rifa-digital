import { createStore } from "vuex";

export default createStore({
  state: {
    newCampaignOpen: false,
    editCampaignOpen: false,
    myCampaignsOpen: true,
  },
  getters: {},
  mutations: {
    openNewCampaign(state) {
      state.newCampaignOpen = true;
      state.editCampaignOpen = false;
      state.myCampaignsOpen = false;
    },
    openEditCampaign(state) {
        state.newCampaignOpen = false;
        state.editCampaignOpen = true;
        state.myCampaignsOpen = false;
    },
    openMyCampaigns(state) {
        state.newCampaignOpen = false;
        state.editCampaignOpen = false;
        state.myCampaignsOpen = true;
      },
  },
});
