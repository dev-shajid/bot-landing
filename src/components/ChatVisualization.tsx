"use client";

import { useState, useEffect, useRef } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ScrollArea } from "@/components/ui/scroll-area";
import { cn } from "@/lib/utils";

interface Message {
  id: number;
  content: string;
  sender: string;
  isSent: boolean;
}

const n8nUsers = [
  {
    name: "WorkflowWizard",
    lastMessage: "Just automated my...",
  },
  { name: "NodeNinja", lastMessage: "Anyone using the new..." },
  { name: "AutomationAce", lastMessage: "Need help with webhook..." },
  { name: "IntegrationIvy", lastMessage: "Loving the Slack..." },
];

const initialMessages: Message[] = [
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
];

export default function N8nWorkflowChat() {
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [inputMessage, setInputMessage] = useState("");
  const scrollAreaRef = useRef<HTMLDivElement>(null);

  const handleSendMessage = () => {
    if (inputMessage.trim() !== "") {
      const newMessage: Message = {
        id: messages.length + 1,
        content: inputMessage,
        sender: "You",
        isSent: true,
      };
      setMessages([...messages, newMessage]);
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
    scrollToBottom();
  }, [messages]);

  return (
    <div className='w-full max-w-6xl mx-auto'>
      <div className='aspect-video bg-zinc-900 rounded-xl overflow-hidden border border-zinc-800'>
        <div className='h-full flex'>
          {/* Sidebar */}
          <div className='w-32 sm:w-64 bg-indigo-600/10 border-r border-zinc-800'>
            <ScrollArea className='h-full'>
              <div className='p-2 sm:p-4 space-y-2 sm:space-y-4'>
                {n8nUsers.map((user, i) => (
                  <div
                    key={i}
                    className='flex items-center gap-2 sm:gap-3 p-2 sm:p-3 rounded-lg hover:bg-zinc-800/50 transition-colors'
                  >
                    <Avatar className='h-6 w-6 sm:h-8 sm:w-8'>
                      <AvatarImage
                        src={`/placeholder.svg?height=32&width=32`}
                      />
                      <AvatarFallback>{user.name[0]}</AvatarFallback>
                    </Avatar>
                    <div className='flex-1 min-w-0'>
                      <p className='text-xs sm:text-sm font-medium text-zinc-100'>
                        {user.name}
                      </p>
                      <p className='text-[10px] sm:text-xs text-zinc-400 truncate'>
                        {user.lastMessage}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollArea>
          </div>

          {/* Main Chat Area */}
          <div className='flex-1 flex flex-col min-h-0'>
            <ScrollArea ref={scrollAreaRef} className='flex-1 p-2 sm:p-4'>
              <div className='space-y-2 sm:space-y-4'>
                {messages.map((message) => (
                  <div
                    key={message.id}
                    className={cn(
                      "flex items-start gap-2 sm:gap-3",
                      message.isSent && "flex-row-reverse",
                    )}
                  >
                    <Avatar className='h-5 w-5 sm:h-8 sm:w-8 mt-0.5 sm:mt-1'>
                      <AvatarImage
                        src={`/placeholder.svg?height=32&width=32`}
                      />
                      <AvatarFallback>{message.sender[0]}</AvatarFallback>
                    </Avatar>
                    <div
                      className={cn(
                        "rounded-lg px-2 py-1.5 sm:px-4 sm:py-2 max-w-[75%]",
                        message.isSent
                          ? "bg-indigo-500 text-white"
                          : "bg-zinc-800 text-zinc-100",
                      )}
                    >
                      <p className='text-[10px] sm:text-sm'>
                        {message.content}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollArea>

            {/* Input Area */}
            <div className='p-2 sm:p-4 border-t border-zinc-800'>
              <div className='flex items-center gap-2'>
                <input
                  type='text'
                  value={inputMessage}
                  onChange={(e) => setInputMessage(e.target.value)}
                  onKeyPress={(e) => {
                    if (e.key === "Enter") {
                      handleSendMessage();
                    }
                  }}
                  placeholder='Type your message...'
                  className='flex-1 bg-zinc-800 text-zinc-100 rounded-lg px-2 py-1 sm:px-4 sm:py-2 text-[10px] sm:text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500'
                />
                <button
                  onClick={handleSendMessage}
                  className='bg-indigo-500 text-white px-2 py-1 sm:px-4 sm:py-2 rounded-lg text-[10px] sm:text-sm font-medium hover:bg-indigo-600 transition-colors'
                >
                  Send
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
