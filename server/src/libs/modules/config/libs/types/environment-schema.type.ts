type EnvironmentSchema = {
  APP: {
    HOST: string;
    PORT: number;
  };
  DATABASE: {
    CONNECTION_URL: string;
  };
  REPLICATE: {
    API_KEY: string;
  };
};

export { type EnvironmentSchema };
