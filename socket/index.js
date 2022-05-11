const express = require("express")
const Socket = require("socket.io");
const schedule = require('node-schedule');
const StartTime = new schedule.RecurrenceRule();
const StopTime = new schedule.RecurrenceRule();
const cors = require("cors");
const app = express();
const server = require("http").createServer(app);
let start = false
let onlineUsers = [];
let messages = [];

app.use(express.json());
app.use(cors())

app.get("/", (req, res) => res.render("test"))

const io = Socket(server, {
    cors: {
        origin: "http://localhost:3000",
        method: ["GET", "POST"]
    }
})

// your timezone
StartTime.tz = 'Africa/Maputo';
StopTime.tz = 'Africa/Maputo';

// runs at 15:00:00
StartTime.second = 0;

StopTime.second = 31;
// rule.minute = 26;
// rule.hour = 15;

// schedule

io.on("connection", socket => {
    console.log("client connected", socket.id);
    socket.emit("connected", { id: socket.id, messages, start });
    console.log(start);
    socket.on("connection-data", (data) => {
        socket.join("101");
        onlineUsers.map(user => {
            if (user.username === data.username) {
                user.id = data.id
            }
        })
        const user = onlineUsers.filter(user => user.id === data.id)
        console.log(user);
        if (!user.length) onlineUsers.push(data)
        console.log(onlineUsers);
        socket.emit("online-users", onlineUsers)
    });
    
            socket.on("send-message", (messageData) => {
            console.log(messageData);
            io.to("101").emit("receive-message", messageData);
            messages.push(messageData)
        })

    schedule.scheduleJob(StartTime, function () {
        start = true
        console.log("started", start);
        socket.emit("start", start)
    });
    schedule.scheduleJob(StopTime, function () {
        start = false
        console.log("finished", start);
        socket.emit("start", start)
    });

        socket.on("disconnect", () => {
            console.log("Client disconnected", socket.id);
            onlineUsers = onlineUsers.filter(user => user.id !== socket.id)
            socket.emit("disconnected", onlineUsers)
        })
});

server.listen(3001, () => {
    console.log('server is running on port 3001');
})
