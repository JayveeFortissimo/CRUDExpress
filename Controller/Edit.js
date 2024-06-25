import Model from '../Model/Database.js';

function edit(req,res){

    //eto gumamit ako ng find mmethod which is a array method
    //tinitignan nya kung iqual ba yung id na ilalagay ko sa url
//don sa database 
const id = Model.find(prod => prod.id === +req.params.id);
//id.name kasi kukunin natin lahat ng name don sa data thus equal
//natin sa may req.body na iinput ni user
//btw neeed to complete ahhh like req.body.name
id.name = req.body.name
id.address = req.body.address
id.password = req.body.password

  !id?res.json({status:404,message:"UD not found"}):res.json({status:200,data:id});

}

export default edit