var app = require('express')();
var http = require('http').createServer(app);
var io = require("socket.io")(http);
app.get('/', (req, res) => {
    res.sendFile(__dirname + "/index.html");
});
io.on("connection", (socket) => {
    console.log("user is connected");
    socket.on("adduser", function (data) {
        console.log("IS USER CAME", JSON.stringify(data));
        var username = data.username;
        var room = data.room;
        socket.username = username;
        socket.room = room;
        socket.join(room);
        io.emit("updatechat", { type: "new-message", info: username + " has been joined", text: '' });
    });
    socket.on("add-message", (message,username) => {
      if(message.length>0){
            console.log(message);
        io.emit("message", { type: "new-message", text: message,username:username});
      }
    });
    socket.on("disconnect", () => {
        console.log("DISCONNECT");
    });

});
http.listen(8080, () => {
    console.log("Listening to port 8080");
});
