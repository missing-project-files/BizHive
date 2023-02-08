const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./db/connection.js');
const cors = require('cors');

const app = express();
app.use(express.json());

process.env.NODE_ENV = process.env.NODE_ENV || 'development';

console.log('INFO: NODE_ENV:' + process.env.NODE_ENV);

if (process.env.NODE_ENV === 'development') {
  dotenv.config({ path: '../.env.dev' });
  app.use(cors());
}

if (process.env.NODE_ENV === 'production') {
  dotenv.config({ path: '.env.dev.prod' });
  app.use(secure);
  app.use(express.static(path.join(__dirname, '../frontend/build')));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../frontend', 'build', 'index.html'));
  });
}

connectDB();

app.use('/api/auth', require('./routes/auth'));

app.listen(
  process.env.PORT,
  console.log(`INFO: Backend listening on port ${process.env.PORT}`)
);

// Enable HTTPS
// const options = {
//   key: fs.readFileSync('server.key'),
//   cert: fs.readFileSync('server.cert'),
// };
// https.createServer(options, app).listen(443);
