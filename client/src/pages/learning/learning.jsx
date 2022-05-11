import "./learning.css"
import { RiSendPlaneFill } from "react-icons/ri"
import ScrollToBottom from "react-scroll-to-bottom";
import { useEffect, useRef, useState } from "react";
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import io from "socket.io-client";
const socket = io.connect("http://localhost:3001");

export default function Learning() {
    const navigate = useNavigate()
    const [messageList, setMessageList] = useState([]);
    const [onlineUsers, setOnlineUsers] = useState([]);
    const [start, setStart] = useState(false);
    const currentMessage = useRef()
    const { user } = useSelector((state) => state.auth)

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
        socket.on("connected", data => {
            setMessageList(data.messages);
            socket.emit("connection-data", {
                id: data.id,
                username: user.username
            })
            // console.log(data.id,user.username);
            setStart(data.start)
        })
        socket.on("start", (start) => {
            setStart(start)
        })
        socket.on("online-users", (users) => {
            setOnlineUsers(users);
        })
        socket.on("receive-message", (msg) => {
            setMessageList((list) => {
                if (list[list.length - 1] !== msg) {
                    return [...list, msg]
                }
                return [...list]
            }
            );

        });
        socket.on("disconnected", (users) => {
            setOnlineUsers(users)
        })
    }, [socket]);

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
