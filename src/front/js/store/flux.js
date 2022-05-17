const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      message: null,
    },
    actions: {
      // Use getActions to call a function within a fuction
    },
  };
};

export default getState;
