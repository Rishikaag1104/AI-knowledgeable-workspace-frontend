import { useState } from "react";
import { Send, Sparkles } from "lucide-react";

function Chat() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const sendMessage = async () => {
    if (!input.trim()) return;
    
    const userMsg = {
    role: "user",
    content: input,
  };

    const userMessage = { role: "user", content: input };
    setMessages(prev => [...prev, userMessage]);
    setInput("");
    setLoading(true);
    console.log("Sending question:", userMsg.content);


    try {
      const res = await fetch("http://localhost:5000/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ question: input }),
      });

      const data = await res.json();

      const aiMessage = {
        role: "assistant",
        content: data.answer,
      };

      setMessages(prev => [...prev, aiMessage]);
    } catch (err) {
      console.error(err);
      setMessages(prev => [
        ...prev,
        { role: "assistant", content: "Something went wrong 😕" },
      ]);
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="flex flex-col h-[calc(100vh-64px)] p-6">

      
      <div className="mb-6">
        <h1 className="text-2xl font-semibold flex items-center gap-2">
          <Sparkles className="text-indigo-400" size={22} />
          AI Assistant
        </h1>
        <p className="text-gray-400 text-sm">
          Chat with your knowledge base
        </p>
      </div>

     

      <div className="flex-1 overflow-y-auto space-y-6 pr-2">
        {messages.map((msg, i) => (
          msg.role === "assistant" ? (
            <div key={i} className="flex items-start gap-3">
              <div className="w-9 h-9 rounded-full bg-indigo-600 flex items-center justify-center text-white text-sm font-semibold">
                AI
              </div>

              <div className="max-w-xl bg-indigo-600/15 border border-indigo-500/30 p-4 rounded-2xl rounded-tl-sm shadow-lg">
                <p className="text-sm leading-relaxed">
                  {msg.content}
                </p>
              </div>
            </div>
          ) : (
            <div key={i} className="flex justify-end">
              <div className="max-w-xl bg-white/10 p-4 rounded-2xl rounded-tr-sm">
                <p className="text-sm">
                  {msg.content}
                </p>
              </div>
            </div>
          )
        ))}

        {loading && (
          <div className="flex items-start gap-3 opacity-70">
            <div className="w-9 h-9 rounded-full bg-indigo-600 flex items-center justify-center text-white text-sm font-semibold">
              AI
            </div>
            <div className="px-4 py-2 rounded-2xl bg-indigo-600/10 text-sm">
              <span className="animate-pulse">Thinking...</span>
            </div>
          </div>
        )}
      </div>


     
      <div className="mt-6">
        <div className="flex items-center gap-3 bg-[#071426]/90 border border-white/10 rounded-xl px-4 py-3 backdrop-blur">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && sendMessage()}
            type="text"
            placeholder="Ask something about your documents..."
            className="flex-1 bg-transparent outline-none text-sm text-white placeholder-gray-400"
          />
          <button
          onClick={sendMessage} className="bg-indigo-600 hover:bg-indigo-500 transition px-4 py-2 rounded-lg">
            <Send size={16} />
          </button>
        </div>
      </div>

    </div>
  );
}

export default Chat;
