import { array } from "prop-types";

const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      users: [],
      sports: [],
      pistas: [],
      strava: [],
      events: [],
      province: [],
      userEvents: [],
      userSports: [],
      currentUser: {},
      userFollowers: [],
      userFollowing: [],
      url: "https://3001-thelgaris-finalproject-mazoxel3g9q.ws-eu51.gitpod.io/api",
      stravaUrl: "https://www.strava.com/oauth/authorize",
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
          userFollowing: data.response.followings,
          userFollower: data.response.followers,
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
          getActions().getEvents();

          return true;
        } else {
          return false;
        }
      },

      setUnJoinEvents: async (unjoin) => {
        const store = getStore();
        setStore({
          userEvents: store.userEvents.filter((uetable) => uetable != unjoin),
        });

        const resp = await fetch(getStore().url + "/unjoinEvent", {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + localStorage.getItem("access_token"),
          },
          body: JSON.stringify({ id: unjoin }),
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

      setFollowers: async (user) => {
        const store = getStore();
        if (!store.currentUser.following.includes(user)) {
          setStore([store.currentUser.following, user]);
        } else {
          setStore([store.currentUser.following.filter((all) => all != user)]);
        }
        const resp = await fetch(getStore().url + "/followers", {
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

          setStore({ logged: data.logged_in || false });
        } catch (e) {
          setStore({ logged: false });
        }
      },
    },
  };
};

export default getState;
