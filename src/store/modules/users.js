import { json, status } from '../../utils/helpers/network';

const state = {
  usersList: [],
  loadingError: '',
  companiesList: []
};

const getters = {
  getUsersList: state => {
    return state.usersList;
  },
  getError: state => {
    return state.loadingError;
  },
  getCompaniesList: state => {
    return state.companiesList;
  }
};

const mutations = {
  setUsers: (state, users) => {
    state.usersList = users;
    state.loadingError = '';
  },
  setCompanies: (state, companies) => {
    state.companiesList = companies;
  },
  setError: (state, error) => {
    state.loadingError = error;
  },
  addUser: (state, user) => {
    state.usersList = [...state.usersList, user];
  },
  deleteUser: (state, user) => {
    state.usersList = state.usersList.filter(usr => usr.name !== user.name);
  },
  editUser: (state, user) => {
    state.usersList = state.usersList.map(usr => {
      if (usr.id === user.id) {
        return user;
      }
      return usr;
    });
  }
};

const actions = {
  getUsers: ({ commit }) => {
    return fetch('https://jsonplaceholder.typicode.com/users', {
      method: 'GET'
    })
      .then(status)
      .then(json)
      .then(result => {
        const companies = [];
        result.forEach(user => {
          const isExist = companies.find(comp => comp.name === user.company.name);
          if (isExist === undefined) {
            companies.push(user.company);
          }
        });
        commit('setUsers', result);
        commit('setCompanies', companies);
      })
      .catch(e => {
        console.log(e);
      });
  },
  addUser: ({ commit }, payload) => {
    console.log('action addUser', payload.user);
    commit('addUser', payload.user);
  },
  deleteUser: ({ commit }, payload) => {
    console.log('action delUser', payload.user);
    commit('deleteUser', payload.user);
  },
  editUser: ({ commit }, payload) => {
    console.log('action editUser', payload.user);
    commit('editUser', payload.user);
  }
};

export default {
  state,
  getters,
  mutations,
  actions
};
