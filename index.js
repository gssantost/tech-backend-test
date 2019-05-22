const app = require('./app');

const { PORT } = process.env;

const server = app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});