import 'dotenv/config';
import * as joi from 'joi';

interface EnvVars {
  PORT: number;
  //   MONGO_URI: string;
  //   JWT_SECRET: string;
  //   JWT_EXPIRES_IN: string;
}

const envsSchema = joi
  .object({
    PORT: joi.number().required(),
    //   MONGO_URI: joi.string().required(),
    //   JWT_SECRET: joi.string().required(),
    //   JWT_EXPIRES_IN: joi.string().required(),
  })
  .unknown(true);

const { error, value } = envsSchema.validate(process.env);

// console.log({ error });
// console.log({ envVars });
if (error) {
  throw new Error(`Config validation error: ${error.message}`);
}

const envVars: EnvVars = value;

export const envs = {
  PORT: envVars.PORT,
  //   MONGO_URI: process.env.MONGO_URI || 'mongodb://localhost:27017/products',
  //   JWT_SECRET: process.env.JWT_SECRET || 'secret',
  //   JWT_EXPIRES_IN: process.env.JWT_EXPIRES_IN || '1d',
};
