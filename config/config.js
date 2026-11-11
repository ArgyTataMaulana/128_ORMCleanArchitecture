require("dotenv").config();

const development = {
  username: process.env.DB_USER,
  password: (process.env.DB_PASSWORD || process.env.DB_PASS || '').trim(),
  database: process.env.DB_DATABASE,
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT || 5432),
  dialect: process.env.DB_DIALECT || 'postgres'
};

const production = {
  use_env_variable: "POSTGRES_URL",
  dialect: "postgres",
  dialectOptions: {
    ssl: {
      rejectUnauthorized: false
    }
  }
};

module.exports = {
  development,
  production
};
