import Router from 'express';
import express from 'express';
import getData from '../Controller/Data.get.js';
import pushData from '../Controller/Add.js';
import edits from '../Controller/Edit.js';
import deletes from '../Controller/Delete.js';
const routes = express.Router();

//middleware at Router Folder hehehe
routes.use((req,res,next)=>{
     next();
})


routes.get('/get',getData);
routes.post('/pushData',pushData);
routes.put('/putdata/:id',edits);
routes.delete('/deleted/:id',deletes);





export default routes;