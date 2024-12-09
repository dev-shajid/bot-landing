"use client";
import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Card } from "./ui/card";
import { BorderBeam } from "./ui/border-beam";
import Wrapper from "./global/wrapper";
import Container from "./global/container";

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
    <Wrapper className="flex flex-col items-center justify-center py-12 relative">
      <Container>
        <Card className='border-[#263461] relative max-w-2xl mx-auto shadow-lg overflow-hidden'>
          <div className="p-6 md:p-8 space-y-8 relative z-10">
            <div className="max-w-lg mx-auto text-start md:text-center">
              {/* <SectionBadge title="How it works" /> */}
              <h2 className="text-2xl lg:text-3xl font-semibold">
                Let&apos;s Build Your AI-Powered Future.
              </h2>
              <p className="text-muted-foreground mt-6">
                Got questions? Let us guide you. Drop us a message, and we&apos;ll
                help you take the next step toward smarter operations.
              </p>
            </div>
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
                className='bg-[#0a0a1f]/50 border-gray-700 text-white placeholder-gray-400'
              />
              <Textarea
                name='message'
                placeholder='Your message'
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
                rows={4}
                className='bg-[#0a0f1f]/50 border-gray-700 text-white placeholder-gray-400'
              />
              <Button
                type='submit'
                disabled={status === "sending"}
                className='w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100'
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
          <BorderBeam size={250} duration={12} delay={9} />
        </Card>
      </Container>
    </Wrapper>
  );
};

export default Contact;
