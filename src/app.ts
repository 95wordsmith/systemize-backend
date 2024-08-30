import 'dotenv/config'
import express from 'express'
import { PORT } from '@src/config/constants'
import bodyParser from 'body-parser';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import helmet from 'helmet';
import morgan from 'morgan';

const app = express()

app.use(cors({
  origin:'*'
}));
app.use(helmet()); 
app.use(morgan('dev')); 
app.use(express.json()); 
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());







app.listen(PORT,()=>{
  console.log(`Server is running on port ${PORT}`)
})
