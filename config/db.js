const mongoose = require('mongoose');
const dotenv = require("dotenv");
dotenv.config();


url="mongodb://localhost:27017/Social_APP";


mongoose.connect(url , (err)=>{
if (err)
{
    console.log(err)
}
else
{
    console.log("connected Success")
}

} )
