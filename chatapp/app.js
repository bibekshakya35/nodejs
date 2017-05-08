var app = require('express')();
var http = require('http').createServer(app);
var io = require("socket.io")(http);
app.get('/', (req, res) => {
    res.sendFile(__dirname + "/index.html");
});
io.on("connection", (socket) => {
    console.log("user is connected");
    socket.on("add-message",(message)=>{
        io.emit("message",{type:"new-message",text:message,"username":username});
    });
    // socket.on("chat message", (msg) => {
    //     io.emit("chat message",msg);
    // });
    socket.on("disconnect", () => {
        console.log("DISCONNECT");
    });

});
http.listen(8080, () => {
    console.log("Listening to port 8080");
});
