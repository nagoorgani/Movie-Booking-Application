const express = require('express');

const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const userRouter = require('./routes/user-routes');
const adminRouter = require('./routes/admin-routes');
const movieRouter = require('./routes/movie-routes');
dotenv.config();

//middleware
app.use(express.json());
app.use("/user", userRouter);
app.use("/admin", adminRouter);
app.use("/movie", movieRouter);


mongoose.connect("mongodb+srv://ynagoorgani:AUgG7jFSP2MfKNPd@movie-system.bj9rdkw.mongodb.net/Movies?retryWrites=true&w=majority")

app.listen(3500, () =>{

    console.log(`Connected to localhost port ${3500}`);
})



