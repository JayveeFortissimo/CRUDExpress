import express from 'express';
import routes from './Router/Routes.js';


const app = express();
const PORT = 8000;

//middleware
app.use((req,res,next)=>{
    next();
})
app.use(express.json());


//Routes
app.use(routes);



app.listen(PORT,()=>{
    console.log('ports are working')
})