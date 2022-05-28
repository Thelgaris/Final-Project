const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      sports: [],
      url: "https://3001-thelgaris-finalproject-jj1n5tchp6y.ws-eu46.gitpod.io/api",
    },
    actions: {
      getSports: async () => {
        store = getStore();
        const response = await fetch(store.url + "/sports");
        const data = await response.json();
        setStore({ sports: data.response });
      },
    },
  };
};

export default getState;
