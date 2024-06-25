import Model from '../Model/Database.js';


function pushData(req,res){

let Exist = false;

const datas = {
    id:Model.length,
    name:req.body.name,
    address:req.body.address,
    password:req.body.password
}

Model.forEach(prod =>{
    if(prod.name.includes(datas.name)|| prod.address.includes(datas.address)){
        Exist = !Exist;
    }
})

if(Exist){
    res.json({status:500,message:"Credentials already Exist"})
}else{
    //pushed data
    Model.push(datas);
    res.json({status:200,message:"OK"});
    console.log(Model)
}

}

export default pushData;