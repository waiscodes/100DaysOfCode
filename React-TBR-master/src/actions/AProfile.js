const CreateProfile = (name, email, password) => {
  return {
    type: "CREATE_PROFILE",
    name: name,
    email: email,
    password: password,
  };
};

export { CreateProfile };
