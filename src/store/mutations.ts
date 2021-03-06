import Vue from 'vue';
import VueRouter from 'vue-router';

const TIMEOUT = 2_000;

export default {
    addUser: (store: State, username: string) => {
      store.users.push(username);
    },
    setFormattedContributions: (store: State, {username, payload}: FormattedContributor) => {
      Vue.set(store.formattedContributions, username, payload);
    },
    setContributions: (store: State, {username, payload}: Contributor) => {
      Vue.set(store.contributionInfo, username, payload);
    },
    setDate: (store: State, {type, date}: DatePayload) => {
      store.range[type] = date;
    },
    setAPIError: (store: State) => {
      store.apiError = true;
    },
    setInvalidUserError: (store: State, username: string) => {
      store.invalidUser = username;
      setTimeout(() => {
        store.invalidUser = '';
      }, TIMEOUT);
    },
    setValidUser: (store: State, username: string) => {
      store.validUser = username;
      setTimeout(() => {
        store.validUser = '';
      }, TIMEOUT);
    },
    updateQueryString: (store: State, router: VueRouter) => {
      const query = {
        start: store.range.start,
        end: store.range.end,
        users: store.users.join(','),
      };
      router.push({query});
    },
};
