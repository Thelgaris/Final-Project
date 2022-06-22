const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      users: [],
      sports: [],
      pistas: [],
      strava: [],
      events: [],
      userEvents: [],
      currentUser: {},
      followers: [],
      following: [],
      url: "https://3001-thelgaris-finalproject-l3tabcufz52.ws-eu47.gitpod.io/api",
      stravaUrl: "https://www.strava.com/oauth/authorize",
    },
    actions: {
      getUsers: async () => {
        const resp = await fetch(getStore().url + "/user", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });
        const data = await resp.json();
        console.log(data, " @@@@@@@@@@");
        setStore({ users: data.response });
      },

      getDetails: async (id) => {
        const resp = await fetch(getStore().url + "/details", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });
        const data = await resp.json();
        console.log(data, " @@@@@@@@@@");
        setStore({ details: data.response });
      },
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

        setStore({ events: data.response });
      },

      getCurrentUser: async () => {
        const resp = await fetch(getStore().url + "/currentUser", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + localStorage.getItem("access_token"),
          },
        });
        const data = await resp.json();

        setStore({
          currentUser: data.response,
          userEvents: data.response.events,
        });
      },

      getFollowers: async (id) => {
        const resp = await fetch(getStore().url + "/followers", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });
        const data = await resp.json();

        setStore({ followers: data.response });
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

        if (resp.ok) {
          getActions().getCurrentUser();
          getActions().getEvents();
          return true;
        } else {
          return false;
        }
      },

      setJoinEvents: async (join) => {
        const resp = await fetch(getStore().url + "/joinEvent", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + localStorage.getItem("access_token"),
          },
          body: JSON.stringify(join),
        });
        const data = await resp.json();

        if (resp.ok) {
          getActions().getCurrentUser();

          return true;
        } else {
          return false;
        }
      },

      getFollowing: async () => {
        const resp = await fetch(getStore().url + "/userFollowing", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });
        const data = await resp.json();

        setStore({ following: data.response });
      },

      getFollowers: async () => {
        const resp = await fetch(getStore().url + "/userFollowers", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });
        const data = await resp.json();

        setStore({ followers: data.response });
      },

      setFollowing: async (user) => {
        const store = getStore();
        if (!store.following.includes(user)) {
          setStore({ following: [...store.following, user] });
        } else {
          setStore({
            following: store.following.filter((all) => all != user),
          });
        }
        const resp = await fetch(getStore().url + "/users", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + localStorage.getItem("access_token"),
          },
          body: JSON.stringify(user),
        });
        const data = await resp.json();
      },
    },
  };
};

export default getState;
