import Model from '../Model/Database.js';

function getData(req,res){
      res.json({status:200,data:Model});
};


export default getData;

