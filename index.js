const express=require('express');
const server=express();
const middleware=require('./middleware/middleware')
server.use(middleware);

const userRoute=require('./router/user');
const userRoute1=require('./router/userdesc');
const config=require('./config/config.json');

server.use('/user',userRoute); 
server.use('/userdesc',userRoute1); 

server.listen(config.app.port, () => {
	console.log(`Service is listening to ${config.app.port}`);
});