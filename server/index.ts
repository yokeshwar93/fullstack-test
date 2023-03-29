import express, { Application } from 'express'
import cors from 'cors';
import router from './router';
const app: Application = express();

const port: number = 3001;
app.use(cors({
  origin: 'http://localhost:3000'
}))
app.use('/articles', router)
app.listen(port, () => {
  console.log(`App is listening on port ${port} !`)
});
