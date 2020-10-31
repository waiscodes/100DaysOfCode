const RUsrProfile = (state = [], action) => {
  switch (action.type) {
    case "CREATE_PROFILE":
      const usrProfile = {
        name: action.name,
        email: action.email,
        password: action.password,
      };

      return [...state, usrProfile];
    default:
      return state;
  }
};

export default RUsrProfile;
