import 'dotenv/config';
import express from 'express';
import router from './router/auth-router.js';
import connectdb from './utils/db.js'


const app = express();

app.use(express.json())
 
app.use('/api/auth', router);

const PORT = 8000;
 connectdb().then(() => {
     app.listen(PORT, () => {
         console.log(`server is started on port ${PORT}`);
     });
 });
