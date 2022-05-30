const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      sports: [],
      url: "https://3001-thelgaris-finalproject-jj1n5tchp6y.ws-eu46.gitpod.io/sapi",
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
    },
  };
};

export default getState;
