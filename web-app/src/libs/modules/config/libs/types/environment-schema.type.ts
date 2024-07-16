type EnvironmentSchema = {
  APP: {
    ENVIRONMENT: string;
  };
  DATABASE: {
    CONNECTION_URL: string;
  };
  JWT: {
    ALGORITHM: string;
    EXPIRES_IN: string;
    SECRET: string;
  };
};

export { type EnvironmentSchema };
