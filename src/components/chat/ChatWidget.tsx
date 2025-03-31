
import React, { useState } from "react";
import ChatButton from "./ChatButton";
import ChatInterface from "./ChatInterface";
import { AnimatePresence, motion } from "framer-motion";

interface ChatWidgetProps {
  apiKey?: string; 
}

const ChatWidget: React.FC<ChatWidgetProps> = ({ apiKey = "" }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [showApiKeyInput, setShowApiKeyInput] = useState(!apiKey);
  const [apiKeyValue, setApiKeyValue] = useState(apiKey);

  const toggleChat = () => {
    setIsOpen((prev) => !prev);
  };

  const handleSubmitApiKey = (e: React.FormEvent) => {
    e.preventDefault();
    if (apiKeyValue.trim()) {
      setShowApiKeyInput(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ duration: 0.2 }}
            className="mb-4"
          >
            {showApiKeyInput ? (
              <div className="bg-white p-4 rounded-lg shadow-xl w-[350px]">
                <h3 className="font-semibold mb-2">Enter Gemini API Key</h3>
                <form onSubmit={handleSubmitApiKey}>
                  <input
                    type="password"
                    value={apiKeyValue}
                    onChange={(e) => setApiKeyValue(e.target.value)}
                    className="w-full p-2 border rounded mb-2"
                    placeholder="Paste your API key here"
                  />
                  <button
                    type="submit"
                    className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700"
                  >
                    Submit
                  </button>
                </form>
                <p className="text-xs mt-2 text-gray-500">
                  Your API key will be stored in your browser's local storage.
                </p>
              </div>
            ) : (
              <ChatInterface onClose={toggleChat} apiKey={apiKeyValue} />
            )}
          </motion.div>
        )}
      </AnimatePresence>
      <ChatButton onClick={toggleChat} />
    </div>
  );
};

export default ChatWidget;
