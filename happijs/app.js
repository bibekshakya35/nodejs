const Hapi = require('hapi');
//init server
const server = new Hapi.Server();

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/hapidb', { useMongoClient: true })
    .then(() => console.log("Mongo Db Connected"))
    .catch(err => console.log(err));
//create Task Model
const task = mongoose.model("Task",{text:String});
//add connection
server.connection({
    port: 8000,
    host: "localhost"
});
//home route
server.route({
    method: 'GET',
    path: "/",
    handler: (request, reply) => {
        reply.view("index", {
            name: "Bibek Shakya"
        });
    }
});
//dynamic route
server.route({
    method: 'GET',
    path: "/user/{name}",
    handler: (request, reply) => {
        reply("Hello, " + request.params.name);
    }
});
server.route({
    method: 'GET',
    path: "/tasks",
    handler: (request, reply) => {
        let tasks = task.find((err,tasks)=>{
            console.log(tasks);
        });
    }
});

server.register(require('inert'), (err) => {
    if (err) {
        throw err;
    }
    server.route({
        method: 'GET',
        path: "/about",
        handler: (request, reply) => {
            reply.file('./public/about.html');
        }
    });
    server.route({
        method: 'GET',
        path: "/hapi",
        handler: (request, reply) => {
            reply.file('./public/images.png');
        }
    });
});
//VISION TEMPLATE SERVER 
server.register(require('vision'), (err) => {
    if (err) {
        throw err;
    }
    server.views({
        engines: {
            html: require('handlebars')
        },
        path: __dirname + "/views"
    })
});
//Start Server
server.start((err) => {
    if (err) {
        throw err;
    }
    console.log(`server started at : ${server.info.uri}`);
});




