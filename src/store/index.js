import { createStore } from "vuex";

export default createStore({
  state: {
    newCampaignOpen: false,
    editCampaignOpen: false,
    myCampaignsOpen: true,
    campaign: {
      name: "",
      amountTickets: { name: "Escolha uma opção" },
      category: { name: "Escolha uma opção" },
      ticketPrice: "",
      howRaffle: { name: "Escolha uma opção" },
      country: { acronym: "BR", name: "Brasil" },
      tel: "",
      description: "",
      minTickets: "",
      maxTickets: "",
      date: "",
      timePayment: { name: "Escolha uma opção" },
      paid: false,
    },
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
    setCampaign(state, value) {
      state.campaign = value
    }
  },
});
