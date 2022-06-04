const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      sports: [],
      pistas: [],
      events: [],
      UserEvent: [],
      OnePista: [],
      url: "https://3001-thelgaris-finalproject-3did2fyusc4.ws-eu46.gitpod.io/api",
    },
    actions: {
      getSports: async () => {
        const resp = await fetch(getStore().url + "/sports", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });
        const data = await resp.json();
        console.log(data, " @@@@@@@@@@");
        setStore({ sports: data.response });
      },
      getPistas: async () => {
        const resp = await fetch(getStore().url + "/pistas", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });
        const data = await resp.json();
        console.log(data, " @@@@@@@@@@");
        setStore({ pistas: data.response });
      },

      getEvents: async () => {
        const resp = await fetch(getStore().url + "/CreateEvent", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });
        const data = await resp.json();
        console.log(data, " @@@@@@@@@@");
        setStore({ events: data.response });
      },
      getOnePista: async (id) => {
        const response = await fetch(getStore().url + "/pistas/");
        const data = await response.json();
        console.log(data);
        setStore({ onePista: data.result.properties });
        console.log(getStore().onePista);
      },
    },
  };
};

export default getState;
