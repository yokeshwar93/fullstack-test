import express, { Application } from 'express'

const app: Application = express();

const port: number = 3001;

app.listen(port, () => {
  console.log(`App is listening on port ${port} !`)
});
