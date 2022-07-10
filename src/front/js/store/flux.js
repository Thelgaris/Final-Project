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
      url: "https://3001-thelgaris-finalproject-1brlwez3cza.ws-eu53.gitpod.io/api",
      stravaUrl: "https://www.strava.com/oauth/authorize",
      getUserSports: [],
      setUserSports: [],
      user_id: null,
      logged: false,
      provincias: [
        "Álava",
        "Albacete",
        "Alicante",
        "Almería",
        "Asturias",
        "Ávila",
        "Badajoz",
        "Barcelona",
        "Burgos",
        "Cáceres",
        "Cádiz",
        "Cantabria",
        "Castellón",
        "Ciudad Real",
        "Córdoba",
        "Cuenca",
        "Gerona",
        "Granada",
        "Guadalajara",
        "Guipúzcoa",
        "Huelva",
        "Huesca",
        "Islas Baleares",
        "Jaén",
        "La Coruña",
        "La Rioja",
        "Las Palmas",
        "León",
        "Lérida",
        "Lugo",
        "Madrid",
        "Málaga",
        "Murcia",
        "Navarra",
        "Orense",
        "Palencia",
        "Pontevedra",
        "Salamanca",
        "Santa Cruz de Tenerife",
        "Segovia",
        "Sevilla",
        "Soria",
        "Tarragona",
        "Teruel",
        "Toledo",
        "Valencia",
        "Valladolid",
        "Vizcaya",
        "Zamora",
        "Zaragoza",
      ],
    },
    actions: {
      getUsers: async () => {
        const resp = await fetch(getStore().url + "/user", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + localStorage.getItem("access_token"),
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
          userFollowers: data.response.followers,
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

      setFollowers: async (id) => {
        const resp = await fetch(getStore().url + "/followers", {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + localStorage.getItem("access_token"),
          },
          body: JSON.stringify({ id: id }),
        });
        const data = await resp.json();
        if (resp.ok) {
          getActions().getUsers();
          getActions().getCurrentUser();

          return true;
        } else {
          return false;
        }
      },

      setUnFollow: async (id) => {
        const resp = await fetch(getStore().url + "/unFollow", {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + localStorage.getItem("access_token"),
          },
          body: JSON.stringify({ id: id }),
        });
        const data = await resp.json();
        if (resp.ok) {
          getActions().getUsers();
          getActions().getCurrentUser();

          return true;
        } else {
          return false;
        }
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
