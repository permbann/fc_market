/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  env: {
    DB_HOST: process.env.DB_HOST,
    DB_USER: process.env.DB_USER,
    DB_PASS: process.env.DB_PASS,
    MARKET_URL: process.env.MARKET_URL,
    MARKET_API_KEY: process.env.MARKET_API_KEY,
    MARKET_MASTER_DELETE_KEY: process.env.MARKET_MASTER_DELETE_KEY,
  },
};
