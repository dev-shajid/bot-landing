"use client";
import React, { useState } from "react";
import { Send } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { BorderBeam } from "@/components/ui/border-beam";
import Wrapper from "@/components/global/wrapper";
import Container from "@/components/global/container";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { useForm } from "react-hook-form";

const formSchema = z.object({
  email: z.string().email({ message: "Invalid email address" }),
  message: z.string().min(10, { message: "Message must be at least 10 characters" }),
});

const Contact = () => {
  const [status, setStatus] = useState<
    "idle" | "sending" | "success" | "error"
  >("idle");

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      message: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    setStatus("sending");

    try {
      await fetch('https://playground.attensys.ai/webhook/send-message', {
        method: 'POST',
        body: JSON.stringify(values),
        headers: { 'Content-Type': 'application/json' },
      });

      setStatus("success");
      form.reset();

      setTimeout(() => setStatus("idle"), 3000);
    } catch (error) {
      setStatus("error");
      console.error("Error sending email:", error);
      setTimeout(() => setStatus("idle"), 3000);
    }
  };

  return (
    <Wrapper className="flex flex-col items-center justify-center py-12 relative">
      <div className="hidden md:block absolute top-0 -right-1/3 w-72 h-72 bg-primary rounded-full blur-[10rem] -z-10" />
      <Container>
        <Card className='border-[#263461] relative max-w-2xl mx-auto shadow-lg overflow-hidden'>
          <div className="p-6 md:p-8 space-y-8 relative z-10">
            <div className="max-w-lg mx-auto text-center">
              <h2 className="text-2xl lg:text-3xl font-semibold">
                Let&apos;s Build Your AI-Powered Future.
              </h2>
              <p className="text-muted-foreground mt-6">
                Got questions? Let us guide you. Drop us a message, and we&apos;ll
                help you take the next step toward smarter operations.
              </p>
            </div>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-6'>
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input
                          placeholder="Your email"
                          {...field}
                          className='bg-[#0a0a1f]/50 border-gray-700 text-white placeholder-gray-400'
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Textarea
                          placeholder="Your message"
                          {...field}
                          rows={4}
                          className='bg-[#0a0f1f]/50 border-gray-700 text-white placeholder-gray-400'
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
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
              </form>
            </Form>

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
          </div>
          <BorderBeam size={250} duration={12} delay={9} />
        </Card>
      </Container>
    </Wrapper>
  );
};

export default Contact;

