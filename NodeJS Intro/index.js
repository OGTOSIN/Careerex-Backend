const express = require("express"); //bring in the express I 
// installed into the variable express

const app = express(); //invoking the express function on the 
// app - backend (app/server) running on the express I invoked

// const app = require("express")()

app.use(express.json()); //this is the middleware that is used to parse the json data that is coming from the client

PORT = process.env.PORT || 7100; //this is the port number

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`); //this is the port number
}); //listening on port 7100 - this is the port number 
// that the server is listening on. It is the door to the server.//

// console.log(module)



app.get("/", (req, res) => {
    res.json("Hello World"); //this is the response that is sent to the client when the client makes a request to the server
}); //this is the route that is used to handle the request from the client. It is the endpoint that the client will hit to get the response from the server.//

