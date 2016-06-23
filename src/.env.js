module.exports = {
  DEV: process.env.NODE_ENV != 'production',
  PROD: process.env.NODE_ENV == 'production',
}
