const express = require('express');

const app = express();

app.get('/',(req,res) =>{
    res.send('hello world');
} );

app.get('/api/login',(req,res) =>{
    res.send('hello login');
} );

app.get('/api/logout',(req,res) =>{
    res.send('hello logout');
} );


// PORT
const port = process.env.PORT || 3000;

app.listen(port, ()=> console.log(`Server start on port ${port}`));