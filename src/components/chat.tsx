"use client";

import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "./ui/card";
import { useChat } from "ai/react";
import { ScrollArea } from "./ui/scroll-area";

export function Chat() {
  const { messages, input, handleInputChange, handleSubmit } = useChat({
    api: "/api/chat",
  });

  return (
    <Card className="w-[440px]">
      <CardHeader>
        <CardTitle>Chat AI</CardTitle>
        <CardDescription>Using Vercel to create a chat bot.</CardDescription>
      </CardHeader>
      <CardContent>
        <ScrollArea className="h-[600px] w-full space-y-4 pr-4">
          {messages.map((message) => {
            return (
              <div
                key={message.id}
                className="flex gap-3 text-slate-600 text-sm"
              >
                {message.role === "user" && (
                  <Avatar>
                    <AvatarFallback>NP</AvatarFallback>
                    <AvatarImage src="https://github.com/neisonp.png" />
                  </Avatar>
                )}

                {message.role === "assistant" && (
                  <Avatar>
                    <AvatarFallback>UC</AvatarFallback>
                    <AvatarImage src="https://cdn-icons-png.flaticon.com/512/4712/4712109.png" />
                  </Avatar>
                )}

                <p className="leading-relaxed">
                  <span className="block font-bold text-slate-700">
                    {message.role === "user" ? "User:" : "UfoChat:"}
                  </span>
                  {message.content}
                </p>
              </div>
            );
          })}
        </ScrollArea>
      </CardContent>
      <CardFooter>
        <form className="space-x-2 w-full flex gap-2" onSubmit={handleSubmit}>
          <Input
            placeholder="How can i help you?"
            value={input}
            onChange={handleInputChange}
          />
          <Button type="submit">Send</Button>
        </form>
      </CardFooter>
    </Card>
  );
}
