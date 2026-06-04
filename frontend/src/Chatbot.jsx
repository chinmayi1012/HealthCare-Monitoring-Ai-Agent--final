import { useState } from "react";
import axios from "axios";

function Chatbot() {

  const [message, setMessage] = useState("");
  const [reply, setReply] = useState("");

  const sendMessage = async () => {

    try {

      const response = await axios.post(
        "http://127.0.0.1:8000/chat",
        {
          message: message
        }
      );

      setReply(response.data.response);

    } catch (error) {

      console.log(error);

      setReply("Backend not running");

    }

  };

  return (

    <div style={{ padding: "30px" }}>

      <h1>AI Healthcare Chatbot</h1>

      <input
        type="text"
        placeholder="Enter symptoms..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        style={{
          width: "300px",
          height: "40px",
          marginRight: "10px"
        }}
      />

      <button onClick={sendMessage}>
        Send
      </button>

      <h2>Response:</h2>

      <p>{reply}</p>

    </div>

  );

}

export default Chatbot;