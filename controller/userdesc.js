const userModel=require("./../model/userdesc");
const errorHandler=require("./../util/error.handler");
const { Aggregate } = require("mongoose");


class UserController {

     async add(users){
                
          try{
          let userInfo=await userModel.create(users);
          return{
              status:"success",
              result:userInfo 
          };
          }catch(error)
          {
          console.log(error);
          return{
              status:"error",
              error:errorHandler.parseMongoError(error)
              };
            }
    }

    async update(id,update){
                
        try{
        let userInfo=await userModel.update({_id:id},update);
        return{
            status:"success",
            result:userInfo 
        };
        }catch(error)
        {
        console.log(error);
        return{
            status:"error",
            error:errorHandler.parseMongoError(error)
            };
          }
  }
  async fetch(){
  try{
    let userInfo=await userModel.find({});
    return{
        status:"success",
        result:userInfo 
    };
    }catch(error)
    {
    console.log(error);
    return{
        status:"error",
        error:errorHandler.parseMongoError(error)
        };
      }
}
// async fetch(searchString){
//     try{
//        // return searchString; 
//         //console.log(searchString);
//         return await userModel.find({
//             username: {
//                 $regex: searchString,
//                 $options: " i"
//             }
//         } );
//     }catch(error)
//     {
//     console.log(error);
//     return{
//         status:"error",
//         error:errorHandler.parseMongoError(error)
//         };
//      }
    
// }
async delete(id){        
    try{
    let userInfo=await userModel.deleteOne({_id:id});
    return{
        status:"success",
        result:userInfo 
    };
    }catch(error)
    {
    console.log(error);
    return{
        status:"error",
        error:errorHandler.parseMongoError(error)
        };
      }
}
async aggregation(){
    try{
return await userModel.aggregate([
//     {

//         $match:{
//       city:" Erode"
//     }
// },
{
    $sort:{
        username : 1
    }
},
    // {
    // $group:{
    //     _id:"$username",
    //     count:{$sum:true}
    // }
//}

]);
//let result= await userModel.count({city:'tirupur'});

// let result= await userModel.distinct('city');
// return {result:result};
    }catch{
        return{
            status:"error",
            error:errorHandler.parseMongoError(error)
            };
    }
}

}
module.exports=new UserController();