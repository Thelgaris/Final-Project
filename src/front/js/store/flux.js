const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      sports: [],
      getUserSports: [],
      setUserSports: [],
      user_id: null,
      logged: null,
      url: "https://3001-thelgaris-finalproject-xgsiog3kl72.ws-eu47.gitpod.io/api",
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

      getUserSports: (a) => {
        const store = getStore();
        if (!store.getUserSports.includes(a)) {
          setStore({ getUserSports: [...store.getUserSports, a] });
        } else {
          setStore({
            getUserSports: store.getUserSports.filter((b) => b != a),
          });
        }
      },

      verify: async () => {
        try {
          const resp = await fetch(
            "https://3001-thelgaris-finalproject-xgsiog3kl72.ws-eu47.gitpod.io/api/protected",
            {
              method: "GET",
              headers: {
                Authorization: "Bearer " + localStorage.getItem("access_token"),
              },
            }
          );

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
