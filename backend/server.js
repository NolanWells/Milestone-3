// const express = require('express')
// const app = express()
// require('dotenv').config()
// const path = require('path')
// const mongoose = require('mongoose')

// // const movies = require('./controller/movies_controller')

// //mongoose connection
//  mongoose.connect(process.env.MONGO_URI,{useNewUrlParser: true, useUnifiedTopology: true})
//     .then(() => console.log('connection was successful'))
//     .catch((err)=>console.log(`database error ${err}`))

// //middleware   
// app.use(express.json());
// app.use(express.static("public"));

// // app.use('/movies', movies)

// // Have Node serve the files for our built React app
// app.use(express.static(path.join(__dirname, '../build')));

// app.get('/', (req, res) => {
//     res.sendFile(path.join(__dirname, '../build', 'index.html'));
// })

// app.listen(process.env.PORT, () => {
//     console.log(`server running on port ${process.env.PORT}`);
// })