const express = require('express');
const mongoose = require('mongoose');

const app = express() //initialise the express app

//start the server
app.listen(8000, ()=>{
    console.log(`Server started on port: 8000`)
})

//establish the mongodb connection using async/await or promise-then-catch
async function mongoDbConnect(){
    try{
       await mongoose.connect("mongodb://localhost:27017/adhar_database");
       console.log("Connection successful");
    } catch(error){
        console.log(error);     
    }
}
mongoDbConnect();

//Schema define and collection
const adharSchema = new mongoose.Schema({
  adharNo : { type : Number },
  fullName : { type: String },
  isMarried : { type : Boolean },
  city : { type: String },
  pin : { type: Number },
  country: { type: String }
},
 {collection : "adhar_collection"}
);

//create the model - adhar
const Adhar = mongoose.model("Adhar", adharSchema);


app.get("/allAdharDatabase", async (request, response)=>{
   console.log("Fetching data from mongodb....");
   console.log(`Request Path: ${request.url} `);
   
   const adharList = await Adhar.find({})
   return response.status(200).json(adharList)
})

