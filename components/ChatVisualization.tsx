"use client";

import { useState, useEffect, useRef } from "react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { ScrollArea } from "@/components/ui/scroll-area";
import { cn } from "@/lib/utils";
import { AnimatedList } from "./ui/animated-list";
import { Send } from "lucide-react";
import { Button } from "./ui/button";

interface Message {
  id: number;
  content: string;
  sender: string;
  isSent: boolean;
}

const n8nUsers = [
  { name: "WorkflowWizard", lastMessage: "Just automated my..." },
  { name: "NodeNinja", lastMessage: "Anyone using the new..." },
  { name: "AutomationAce", lastMessage: "Need help with webhook..." },
  { name: "IntegrationIvy", lastMessage: "Loving the Slack..." },
];

let initialMessages = [
  {
    id: 1,
    content: "Hey everyone! Has anyone tried the new n8n cloud version?",
    sender: "WorkflowWizard",
    isSent: true,
  },
  {
    id: 2,
    content: "Yes, it's amazing! The UI is so much smoother.",
    sender: "NodeNinja",
    isSent: false,
  },
  {
    id: 3,
    content:
      "I'm still using the self-hosted version. Any major advantages to switching?",
    sender: "WorkflowWizard",
    isSent: true,
  },
  {
    id: 4,
    content:
      "Cloud version has automatic updates and better scaling. Highly recommend!",
    sender: "AutomationAce",
    isSent: false,
  },
  {
    id: 5,
    content: "Thanks! I'll give it a try. Any tips for migrating my workflows?",
    sender: "WorkflowWizard",
    isSent: true,
  },
  {
    id: 6,
    content: "I had some issues with the migration, but the support team was very helpful.",
    sender: "NodeNinja",
    isSent: false,
  },
  {
    id: 7,
    content: "Good to know! I'll reach out to them if I face any problems.",
    sender: "WorkflowWizard",
    isSent: true,
  },
  {
    id: 8,
    content: "Has anyone tried integrating n8n with Jira?",
    sender: "IntegrationIvy",
    isSent: false,
  },
  {
    id: 9,
    content: "Yes, it's pretty straightforward. The documentation is very helpful.",
    sender: "AutomationAce",
    isSent: true,
  },
  {
    id: 10,
    content: "Thanks! I'll check it out.",
    sender: "IntegrationIvy",
    isSent: false,
  }
];

initialMessages = Array(10).fill(initialMessages).flat();

export default function N8nWorkflowChat() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputMessage, setInputMessage] = useState("");
  const scrollAreaRef = useRef<HTMLDivElement>(null);
  const messageIndexRef = useRef(0); // Track the index of the automated messages

  const handleSendMessage = () => {
    if (inputMessage.trim() !== "") {
      const newMessage: Message = {
        id: Math.round(Math.random() * 1000000), // Unique ID
        content: inputMessage,
        sender: "You",
        isSent: true,
      };

      setMessages((prevMessages) => [...prevMessages, newMessage]);

      setInputMessage("");

    }
  };

  const scrollToBottom = () => {
    if (scrollAreaRef.current) {
      const scrollContainer = scrollAreaRef.current.querySelector(
        "[data-radix-scroll-area-viewport]",
      );
      scrollContainer?.scrollTo({
        top: scrollContainer.scrollHeight,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    scrollToBottom(); // Automatically scroll to the bottom when messages change
  }, [messages]);

  // Start the automated message interval when the page loads
  useEffect(() => {
    const newIntervalId = setInterval(() => {
      if (messageIndexRef.current < initialMessages.length) {
        setMessages((prevMessages) => {
          const updatedMessage = [
            ...prevMessages,
            initialMessages[messageIndexRef.current], 
          ];
          // if(updatedMessage.length>40) return updatedMessage.slice(-20);
          return updatedMessage;
        });
        messageIndexRef.current++;
      } else {
        clearInterval(newIntervalId); // Stop when all automated messages are added
      }
    }, 2000); // Automated messages every second

    return () => {
      clearInterval(newIntervalId); // Cleanup the interval on component unmount
    };
  }, []);

  return (
    <div className="w-full max-w-6xl mx-auto">
      <div className="sm:aspect-video bg-zinc-900 rounded-xl overflow-hidden border border-zinc-800">
        <div className="h-full flex">
          {/* Sidebar */}
          <div className="w-32 sm:block hidden sm:w-64 bg-blue-600/10 border-r border-zinc-800">
            <ScrollArea className="h-full">
              <div className="p-2 sm:p-4 space-y-2 sm:space-y-4">
                {n8nUsers.map((user, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-2 sm:gap-3 p-1 sm:p-3 rounded-lg hover:bg-zinc-800/50 transition-colors"
                  >
                    <Avatar className="h-6 w-6 sm:h-8 sm:w-8">
                      <AvatarFallback>{user.name[0]}</AvatarFallback>
                    </Avatar>
                    <div className="flex-1 min-w-0">
                      <p className="text-xs sm:text-sm font-medium text-zinc-100">
                        {user.name}
                      </p>
                      <p className="text-[10px] sm:text-xs text-zinc-400 truncate">
                        {user.lastMessage}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollArea>
          </div>

          {/* Main Chat Area */}
          <div className="flex-1 flex flex-col h-full">
            <div
              className={cn(
                "relative max-h-[300px] h-full overflow-hidden flex flex-1 w-full flex-col p-6 md:shadow-xl",
              )}
            >
              <AnimatedList>
                {messages.map((message, i) => (
                  <div
                    key={i}
                    className={cn(
                      "flex items-start gap-2 sm:gap-3",
                      message.isSent && "flex-row-reverse",
                      "animate__animated animate__fadeIn"
                    )}
                  >
                    <Avatar className="h-5 w-5 sm:h-8 sm:w-8 mt-0.5 sm:mt-1">
                      {/* <AvatarImage src={`/placeholder.svg?height=32&width=32`}/> */}
                      <AvatarFallback>{message.sender[0]}</AvatarFallback>
                    </Avatar>
                    <div
                      className={cn(
                        "rounded-lg px-2 py-1.5 sm:px-4 sm:py-2 max-w-[75%]",
                        message.isSent
                          ? "bg-blue-600 text-white"
                          : "bg-zinc-800 text-zinc-100"
                      )}
                    >
                      <p className="text-[10px] sm:text-sm">{message.content}</p>
                    </div>
                  </div>
                ))}
              </AnimatedList>
            </div>

            {/* Input Area */}
            <div className="p-2 sm:p-4 border-t border-zinc-800">
              <div className="flex items-center gap-2">
                <input
                  type="text"
                  value={inputMessage}
                  onChange={(e) => setInputMessage(e.target.value)}
                  onKeyPress={(e) => {
                    if (e.key === "Enter") {
                      handleSendMessage();
                    }
                  }}
                  placeholder="Type your message..."
                  className="flex-1 bg-zinc-800 text-zinc-100 rounded-lg px-2 py-1 sm:px-4 sm:py-2 text-[10px] sm:text-sm focus:outline-none focus:ring-2 focus:ring-blue-600"
                />
                <Button
                  size='icon'
                  onClick={handleSendMessage}
                  className="bg-blue-600 h-8 text-white hover:bg-blue-700 transition-colors"
                >
                  <Send size={16} />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
