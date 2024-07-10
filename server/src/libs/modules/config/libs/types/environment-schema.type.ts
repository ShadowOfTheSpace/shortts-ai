type EnvironmentSchema = {
  APP: {
    HOST: string;
    PORT: number;
  };
  CLOUDINARY: {
    API_KEY: string;
    API_SECRET: string;
    CLOUD_NAME: string;
  };
  DATABASE: {
    CONNECTION_URL: string;
  };
  REPLICATE: {
    API_KEY: string;
  };
};

export { type EnvironmentSchema };
