import { array } from "prop-types";

const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      users: [],
      sports: [],
      pistas: [],
      strava: [],
      events: [],
      userEvents: [],
      userSports: [],
      currentUser: {},
      followers: [],
      following: [],
      url: "https://3001-thelgaris-finalproject-y51eme4hc67.ws-eu47.gitpod.io/api",
      stravaUrl: "https://www.strava.com/oauth/authorize",
      getUserSports: [],
      setUserSports: [],
      user_id: null,
      logged: false,
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
          userSports: data.response.sports,
        });
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

      setUnJoinEvents: async (unjoin) => {
        const store = getStore();
        setStore({
          userEvents: store.userEvents.filter((fav) => fav != unjoin),
        });

        const resp = await fetch(getStore().url + "/unjoinEvent", {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + localStorage.getItem("access_token"),
          },
          body: JSON.stringify(unjoin),
        });
        const data = await resp.json();

        if (resp.ok) {
          getActions().getCurrentUser();

          return true;
        } else {
          return false;
        }
      },

      setUsports: async (userSports) => {
        const resp = await fetch(getStore().url + "/userSports", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + localStorage.getItem("access_token"),
          },
          body: JSON.stringify(userSports),
        });
        const data = await resp.json();

        if (resp.ok) {
          getActions().getCurrentUser();

          return true;
        } else {
          return false;
        }
      },

      setUserSports: async (item) => {
        const store = getStore();
        if (!store.userSports.includes(item)) {
          setStore({ userSports: [...store.userSports, item] });
        } else {
          setStore({
            userSports: store.userSports.filter((fav) => fav != item),
          });
        }
      },

      setUnJoin: async (item) => {
        const store = getStore();
        if (!store.userEvents.includes(item)) {
          setStore({ userEvents: [...store.userEvents, item] });
        } else {
          setStore({
            userEvents: store.userEvents.filter((fav) => fav != item),
          });
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

      verify: async () => {
        try {
          const resp = await fetch(getStore().url + "/protected", {
            method: "GET",
            headers: {
              Authorization: "Bearer " + localStorage.getItem("access_token"),
            },
          });

          const data = await resp.json();
          if (data.user_id) {
            setStore({ user_id: data.user_id });
          }
          console.log(data);
          setStore({ logged: data.logged_in || false });
        } catch (e) {
          setStore({ logged: false });
        }
      },
    },
  };
};

export default getState;
