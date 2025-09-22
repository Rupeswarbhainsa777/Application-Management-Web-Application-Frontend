import { useState } from "react";
import "./AiSupport.css";

const AiSupport = () => {
    const [messages, setMessages] = useState([{ sender: "bot", text: "Hello! How can I help you today?" }]);
    const [input, setInput] = useState("");

    const handleSend = () => {
        if (!input.trim()) return;

        setMessages([...messages, { sender: "user", text: input }]);

        setTimeout(() => {
            setMessages((prev) => [...prev, { sender: "bot", text: "I got your message: " + input }]);
        }, 500);

        setInput("");
    };

    return (
        <div className="chat-container">
            <h1 className="chat-title">AI Support Chatbot</h1>

            <div className="chat-box">
                {messages.map((msg, i) => (
                    <div key={i} className={`message ${msg.sender}`}>
                        {msg.text}
                    </div>
                ))}
            </div>

            <div className="input-area">
                <input
                    type="text"
                    className="input-box"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Type a message..."
                />
                <button className="send-btn" onClick={handleSend}>
                    Send
                </button>
            </div>
        </div>
    );
};

export default AiSupport;
