type EnvironmentSchema = {
  APP: {
    HOST: string;
    PORT: number;
  };
  DATABASE: {
    CONNECTION_URL: string;
  };
};

export { type EnvironmentSchema };
