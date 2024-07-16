const register = () => {
  if (process.env.NEXT_RUNTIME === "nodejs") {
    require("./libs/modules/config/config");
  }
};

export { register };
