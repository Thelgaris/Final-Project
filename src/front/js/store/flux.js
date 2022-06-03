const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      sports: [],
      url: "https://3001-thelgaris-finalproject-xgsiog3kl72.ws-eu46.gitpod.io/api",
    },
    actions: {
      getSports: async () => {
        const resp = await fetch(getStore().url + "/sports", {
          method: "GET",
        });
        const data = await resp.json();
        console.log(data, " @@@@@@@@@@");
        setStore({ sports: data.response });
      },
    },
  };
};

export default getState;
