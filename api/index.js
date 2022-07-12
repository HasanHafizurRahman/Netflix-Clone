const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const authRoute = require('./routes/auth');

    dotenv.config();

// dbuser1_password:h6IEEkPpSll1ukPw
// mongodb+srv://dbuser1:h6IEEkPpSll1ukPw@cluster0.remhw.mongodb.net/?retryWrites=true&w=majority

main().then(() => console.log('Mongodb connected successfully')).catch(err => console.log(err));

async function main() {
    await mongoose.connect(process.env.MONGOURL)
  }


  app.use(express.json());
  app.use("/api/auth", authRoute);

app.listen(8800, ()=>{
    console.log('Server is running on port 8800');
})