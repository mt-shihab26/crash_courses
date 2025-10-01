"use client";

import type { PromptInputMessage } from "@/components/ai-elements/prompt-input";

import { useChat } from "@ai-sdk/react";
import { useState } from "react";

import { Fragment } from "react";
import { DefaultChatTransport } from "ai";
import {
    Conversation,
    ConversationContent,
    ConversationScrollButton,
} from "@/components/ai-elements/conversation";
import {
    PromptInput,
    PromptInputBody,
    PromptInputSubmit,
    PromptInputTextarea,
    PromptInputToolbar,
    PromptInputTools,
} from "@/components/ai-elements/prompt-input";
import { Message, MessageContent } from "@/components/ai-elements/message";
import { Response } from "@/components/ai-elements/response";
import { Loader } from "@/components/ai-elements/loader";

const Chatbot = () => {
    const { messages, sendMessage, status } = useChat({
        transport: new DefaultChatTransport({ api: "/api/chat" }),
    });

    const [input, setInput] = useState("");

    const submit = (message: PromptInputMessage) => {
        if (!message.text) return;
        sendMessage({ text: message.text });
        setInput("");
    };

    return (
        <>
            <div className="max-w-4xl mx-auto p-6 relative size-full h-[100vh] ">
                <div className="flex space-y-4 flex-col h-full">
                    <Conversation className="h-full">
                        <ConversationContent>
                            {messages.map((message) => (
                                <div key={message.id}>
                                    {message.parts.map((part, index) => {
                                        switch (part.type) {
                                            case "text":
                                                return (
                                                    <Fragment
                                                        key={`${message.id}-${index}`}
                                                    >
                                                        <Message
                                                            from={message.role}
                                                        >
                                                            <MessageContent>
                                                                <Response>
                                                                    {part.text}
                                                                </Response>
                                                            </MessageContent>
                                                        </Message>
                                                    </Fragment>
                                                );
                                            default:
                                                return null;
                                        }
                                    })}
                                </div>
                            ))}
                            {status !== "ready" && <Loader />}
                        </ConversationContent>
                        <ConversationScrollButton />
                    </Conversation>

                    <PromptInput onSubmit={submit}>
                        <PromptInputBody>
                            <PromptInputTextarea
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                            />
                        </PromptInputBody>
                        <PromptInputToolbar>
                            <PromptInputTools></PromptInputTools>
                            <PromptInputSubmit disabled={status !== "ready"} />
                        </PromptInputToolbar>
                    </PromptInput>
                </div>
            </div>
        </>
    );
};

export default Chatbot;
