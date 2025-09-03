import 'dotenv/config';
import express from 'express';
import authRouter from './router/auth-router.js';
import contactRouter from './router/contact-router.js'
import connectdb from './utils/db.js'

import errorMiddleware from './middlewares/error-middleware.js';

const app = express();

app.use(express.json())


 
app.use('/api/auth', authRouter);
app.use('/api/form',contactRouter);



app.use(errorMiddleware);

const PORT = 8000;
 connectdb().then(() => {
     app.listen(PORT, () => {
         console.log(`server is started on port ${PORT}`);
     });
 });
