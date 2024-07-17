const register = () => {
  if (process.env.NEXT_RUNTIME === "nodejs") {
    require("./_libs/modules/config/config");
  }
};

export { register };
