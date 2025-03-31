
import React from "react";
import { cn } from "@/lib/utils";
import { BotMessageSquare, MessageCircle } from "lucide-react";

interface ChatMessageProps {
  message: string;
  isUser: boolean;
  timestamp: Date;
}

const ChatMessage: React.FC<ChatMessageProps> = ({ message, isUser, timestamp }) => {
  return (
    <div
      className={cn(
        "flex w-full mb-4",
        isUser ? "justify-end" : "justify-start"
      )}
    >
      <div
        className={cn(
          "flex items-start max-w-[80%]",
          isUser ? "flex-row-reverse" : "flex-row"
        )}
      >
        <div
          className={cn(
            "flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full mr-2",
            isUser ? "bg-indigo-600 ml-2 mr-0" : "bg-gray-200"
          )}
        >
          {isUser ? (
            <MessageCircle className="h-4 w-4 text-white" />
          ) : (
            <BotMessageSquare className="h-4 w-4 text-gray-700" />
          )}
        </div>
        <div
          className={cn(
            "rounded-lg py-2 px-3",
            isUser
              ? "bg-indigo-600 text-white rounded-tr-none"
              : "bg-gray-200 text-gray-800 rounded-tl-none"
          )}
        >
          <p className="text-sm">{message}</p>
          <p className="text-xs mt-1 opacity-70">
            {timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ChatMessage;
