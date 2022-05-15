import "./learning.css"
import { RiSendPlaneFill } from "react-icons/ri"
import ScrollToBottom from "react-scroll-to-bottom";
import { useEffect, useRef, useState } from "react";
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import io from "socket.io-client";

export default function Learning() {
    const navigate = useNavigate()
    const [socket, setSocket] = useState();
    const [messageList, setMessageList] = useState([]);
    const [onlineUsers, setOnlineUsers] = useState([]);
    const [start, setStart] = useState(false);
    const currentMessage = useRef()
    const { user } = useSelector((state) => state.auth)

    useEffect(()=>{
        setSocket(io.connect("http://localhost:3001"));
    },[])

    const sendMessage = async () => {
        const msg = currentMessage.current.value;
        if (msg !== "") {
            const messageData = {
                username: user.username,
                message: msg,
            };

            await socket.emit("send-message", messageData);
            currentMessage.current.value = "";

        }
    };

    useEffect(() => {
        if (!user) {
            navigate('/login')
        }
        socket?.on("connected", data => {
            setMessageList(data.messages);
            socket.emit("connection-data", {
                id: data.id,
                username: user.username
            })
            // console.log(data.id,user.username);
            setStart(data.start)
        })
        socket?.on("start", (start) => {
            setStart(start)
        })
        socket?.on("online-users", (users) => {
            setOnlineUsers(users);
        })
        socket?.on("receive-message", (msg) => {
            setMessageList((list) => [...list, msg]);

        });
        socket?.on("disconnected", (users) => {
            setOnlineUsers(users)
        })
    }, [socket]);

    if(!start) return (
        <div className="before-time">
            <h1>hi {user.username}</h1>
            <h1>Welcome to the platform</h1>
            <h1>To learn shona language</h1>
            <h1>Lesson resumes at {user.time}</h1>
        </div>
    )

    return (
        <div className="learning">
            <div className="card">
                <ScrollToBottom className="msg">
                    {messageList.map((msg, index) => (
                        <div key={index} className="sms">
                            <div className="sender">{msg.username}</div>
                            <div className="message">{msg.message}</div>
                        </div>
                    ))}
                </ScrollToBottom>
                <div className="send">
                    <input ref={currentMessage} placeholder="Send a message" />
                    <RiSendPlaneFill onClick={sendMessage} />
                </div>
            </div>
            <div className="active">
                <h1>Active Users</h1>
                {onlineUsers.map((u, index) => (
                    <h3 key={index}>{u.username}</h3>
                ))}
            </div>
        </div>
    )
}
