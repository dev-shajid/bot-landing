"use client";
import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Card } from "./ui/card";

const EMAILJS_SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID as string;
const EMAILJS_TEMPLATE_ID = process.env
  .NEXT_PUBLIC_EMAILJS_TEMPLATE_ID as string;
const EMAILJS_PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY as string;

const Contact = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<
    "idle" | "sending" | "success" | "error"
  >("idle");

  const form = useRef<HTMLFormElement>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    if (!form.current) return;

    // Validate environment variables
    if (!EMAILJS_SERVICE_ID || !EMAILJS_TEMPLATE_ID || !EMAILJS_PUBLIC_KEY) {
      console.error("EmailJS configuration is missing");
      setStatus("error");
      setTimeout(() => setStatus("idle"), 3000);
      return;
    }

    try {
      await emailjs
        .sendForm(
          EMAILJS_SERVICE_ID,
          EMAILJS_TEMPLATE_ID,
          form.current,
          EMAILJS_PUBLIC_KEY,
        )
        .then(() => {
          setStatus("success");
          setEmail("");
          setMessage("");
        });

      setTimeout(() => setStatus("idle"), 3000);
    } catch (error) {
      setStatus("error");
      console.error("Error sending email:", error);
      setTimeout(() => setStatus("idle"), 3000);
    }
  };
  return (
    <section className='w-full py-12 md:py-24'>
      <div className='container mx-auto px-4 md:px-6'>
        <Card className='border-[#5355d1] max-w-2xl mx-auto bg-gradient-to-br from-[#1a1a3f] to-[#2a2a5f] shadow-lg'>
          <div className='p-6 md:p-8'>
            <h2 className='text-xl font-bold tracking-tighter text-white mb-4'>
              Let&apos;s Build Your AI-Powered Future.
            </h2>
            <p className='text-gray-300 mb-8'>
              Got questions? Let us guide you. Drop us a message, and we&apos;ll
              help you take the next step toward smarter operations.
            </p>
            <form ref={form} onSubmit={handleSubmit} className='space-y-6'>
              <Input
                type='email'
                name='from_name'
                placeholder='Your email'
                value={email}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                  setEmail(e.target.value);
                }}
                required
                className='bg-[#0a0a1f]/50 border-gray-700 text-white placeholder-gray-400 focus:border-[#5355d1]'
              />
              <Textarea
                name='message'
                placeholder='Your message'
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
                rows={4}
                className='bg-[#0a0a1f]/50 border-gray-700 text-white placeholder-gray-400 focus:border-[#5355d1]'
              />
              <Button
                type='submit'
                disabled={status === "sending"}
                className='w-full bg-[#5355d1] text-white py-3 px-6 rounded-lg hover:bg-[#4244b8] transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100'
              >
                {status === "sending" ? (
                  "Sending..."
                ) : (
                  <>
                    Send Message
                    <Send className='ml-2 h-4 w-4' />
                  </>
                )}
              </Button>

              {status === "success" && (
                <p className='text-green-400 mt-2 text-center'>
                  Message sent successfully!
                </p>
              )}
              {status === "error" && (
                <p className='text-red-400 mt-2 text-center'>
                  Failed to send message. Please try again.
                </p>
              )}
            </form>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default Contact;
