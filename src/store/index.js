import { createStore } from "vuex";

export default createStore({
  state: {
    newCampaignOpen: false,
    editCampaignOpen: false,
    myCampaignsOpen: true,
    finalizeCampaignOpen: false,
    myAccountOpen: true,
    paymentOpen: false,
    socialMediaOpen: false,
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
      state.finalizeCampaignOpen = false;
    },
    openEditCampaign(state) {
      state.newCampaignOpen = false;
      state.editCampaignOpen = true;
      state.myCampaignsOpen = false;
      state.finalizeCampaignOpen = false;
    },
    openMyCampaigns(state) {
      state.newCampaignOpen = false;
      state.editCampaignOpen = false;
      state.myCampaignsOpen = true;
      state.finalizeCampaignOpen = false;
    },
    openFinalizeCampaign(state) {
      state.newCampaignOpen = false;
      state.editCampaignOpen = false;
      state.myCampaignsOpen = false;
      state.finalizeCampaignOpen = true;
    },
    openMyAccount(state) {
      state.myAccountOpen = true;
      state.paymentOpen = false;
      state.socialMediaOpen = false;
    },
    openPayment(state) {
      state.myAccountOpen = false;
      state.paymentOpen = true;
      state.socialMediaOpen = false;
    },
    openSocialMedia(state) {
      state.myAccountOpen = false;
      state.paymentOpen = false;
      state.socialMediaOpen = true;
    },
    setCampaign(state, value) {
      state.campaign = value
    }
  },
});
