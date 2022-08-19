// import App from '@/app';
// import AuthRoute from '@routes/auth.route';
// import IndexRoute from '@routes/index.route';
// import UsersRoute from '@routes/users.route';
// import validateEnv from '@utils/validateEnv';

// validateEnv();

// const app = new App([new IndexRoute(), new UsersRoute(), new AuthRoute()]);

// app.listen();

import express from 'express';
import dotenv from 'dotenv';

dotenv.config();
const app = express()

const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Express + TypeScript Server');
});

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
