const mongoose = require('mongoose');
const mongoURL='mongodb+srv://EatsExpress:LAkshyAA1345%21%25@cluster0.z4vnf.mongodb.net/EatsExpress?retryWrites=true&w=majority&appName=Cluster0';
const mongoDB=async()=>{
    await mongoose.connect(mongoURL,{useNewUrlParser: true},async(err,result)=>{
        if(err){
            console.log('---',err);
        }else{
            console.log("connected");
            const fetched_data = await mongoose.connection.db.collection("food_items");
            fetched_data.find({}).toArray(async function(err,data){
                const food_categories = await mongoose.connection.db.collection("food_categories");
                food_categories.find({}).toArray(function (err,catData){
                    if(err){
                        console.log(err); 
                    }else{
                        global.food_items = data;
                        global.food_categories = catData;
                    }
                })
                // if(err){
                //     console.log(err);
                // }else{
                //     global.food_items = data;
                // }
            })
        }
    });
}
module.exports=mongoDB;
