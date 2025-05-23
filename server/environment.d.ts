declare namespace NodeJS {
  interface ProcessEnv {
    EMAIL_PASS: string;
    EMAIL_USER: string;
    FRONTEND_ENDPOINT: string;
    MONGODB_CONNECTION_STRING: string;
  }
}
