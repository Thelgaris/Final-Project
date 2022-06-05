const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      sports: [],
      userSports: [],
      user_id: null,
      logged: null,
      url: "https://3001-thelgaris-finalproject-xgsiog3kl72.ws-eu46.gitpod.io/api",
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

      setUserSports: async (sports) => {
        const store = getStore();
        setStore({
          userSports: store.usersport.filter((sport) => {
            sport != sports;
          }),
        });
      },

      verify: async () => {
        try {
          const resp = await fetch(
            "https://3001-thelgaris-finalproject-xgsiog3kl72.ws-eu46.gitpod.io/api/protected",
            {
              method: "GET",
              headers: {
                Authorization: "Bearer " + localStorage.getItem("userToken"),
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
