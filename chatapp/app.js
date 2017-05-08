var app = require('express')();
var http = require('http').createServer(app);
var io = require("socket.io")(http);
app.get('/', (req, res) => {
    res.sendFile(__dirname + "/index.html");
});
io.on("connection", (socket) => {
    console.log("user is connected");
    socket.on("chat message", (msg) => {
        io.emit("chat message",msg);
    })
    socket.on("disconnect", () => {
        console.log("DISCONNECT");
    })
});
http.listen(80, () => {
    console.log("Listening to port 80");
});