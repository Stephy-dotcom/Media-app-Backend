//1 import json server
const jsonServer=require('json-server')
//2 Create server application using json server
const mediaappServer=jsonServer.create()
//3 Create a middleware used by json server
const middleware=jsonServer.defaults()
//4 create router : set up router for db.json file
const router = jsonServer.router('db.json')
//5 applying middleware to server
mediaappServer.use(middleware)
//6 applying router to server
mediaappServer.use(router)
//7 Define Port
const PORT=3000
//8 Starting the server
mediaappServer.listen(PORT,()=>{
    console.log("Media app server started on PORT" +PORT);
    
})