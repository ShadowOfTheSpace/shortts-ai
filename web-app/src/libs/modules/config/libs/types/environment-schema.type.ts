type EnvironmentSchema = {
  APP: {
    ENVIRONMENT: string;
  };
  DATABASE: {
    CONNECTION_URL: string;
  };
  GOOGLE: {
    CALLBACK_URL: string;
    CLIENT_ID: string;
    CLIENT_SECRET: string;
  };
  JWT: {
    ALGORITHM: string;
    EXPIRES_IN: string;
    SECRET: string;
  };
};

export { type EnvironmentSchema };
