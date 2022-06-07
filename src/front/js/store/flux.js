const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      sports: [],
      pistas: [],
      events: [],
      userEvents: [],
      followers: [],

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
        const resp = await fetch(getStore().url + "/events", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });
        const data = await resp.json();
        console.log(data, " @@@@@@@@@@");
        setStore({ events: data.response });
      },

      getUserEvents: async () => {
        const resp = await fetch(getStore().url + "/userEvents", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + localStorage.getItem("access_token"),
          },
        });
        const data = await resp.json();
        console.log(data, " @@@@@@@@@@");
        setStore({ userEvents: data.response });
      },

      setEvents: async (event) => {
        const resp = await fetch(getStore().url + "/events", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + localStorage.getItem("access_token"),
          },
          body: JSON.stringify(event),
        });
        const data = await resp.json();
        console.log(data, " @@@@@@@@@@");
      },

      setFollowers: async (item) => {
        const store = getStore();
        if (!store.followers.includes(item)) {
          setStore({ followers: [...store.followers, item] });
        } else {
          setStore({
            followers: store.followers.filter((fav) => fav != item),
          });
        }
      },
    },
  };
};

export default getState;
