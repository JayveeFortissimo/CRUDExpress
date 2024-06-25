import Model from '../Model/Database.js';

function deletes(req,res){
    const id = +req.params.id
                                      //+id talaga yan plus to convert a Number
const idx = Model.find(element => element.id === id);


if(!idx){
 return res.json({status:404})
}

const data = Model[idx];
Model.splice(data,1)

return res.json({status:"OK"})


}


export default deletes;