import 'dotenv/config';

//TODO: validar mediante schema

export const envs = {
  PORT: process.env.PORT || 3000,
  //   MONGO_URI: process.env.MONGO_URI || 'mongodb://localhost:27017/products',
  //   JWT_SECRET: process.env.JWT_SECRET || 'secret',
  //   JWT_EXPIRES_IN: process.env.JWT_EXPIRES_IN || '1d',
};
