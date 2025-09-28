import { useState } from "react";
import "./AiSupport.css";

const AiSupport = () => {
    const [messages, setMessages] = useState([
        { sender: "bot", text: "Hello! Type something and I'll ask the API for you 😊" },
    ]);
    const [input, setInput] = useState("");
    const [loading, setLoading] = useState(false);

    const handleSend = async () => {
        if (!input.trim()) return;

        // Add user message
        setMessages((prev) => [...prev, { sender: "user", text: input }]);

        const userMessage = input;
        setInput("");
        setLoading(true);

        try {
            // Encode user message into the API URL
            const response = await fetch(`http://localhost:8021/api/${encodeURIComponent(userMessage)}`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                },
            });

            const data = await response.json();

            // Add bot reply (adjust JSON key depending on backend)
            setMessages((prev) => [
                ...prev,
                { sender: "bot", text: data.reply || JSON.stringify(data) || "I didn’t get a reply 🤔" },
            ]);
        } catch (error) {
            setMessages((prev) => [
                ...prev,
                { sender: "bot", text: "⚠️ Error connecting to server." },
            ]);
        } finally {
            setLoading(false);
        }
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
                {loading && <div className="message bot">Loading...</div>}
            </div>

            <div className="input-area">
                <input
                    type="text"
                    className="input-box"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Type 'tell me a tech joke'..."
                />
                <button className="send-btn" onClick={handleSend} disabled={loading}>
                    Send
                </button>
            </div>
        </div>
    );
};

export default AiSupport;
