"use client";

import { useChat } from "@ai-sdk/react";
import { DefaultChatTransport } from "ai";
import { Fragment, useState } from "react";
import {
    Conversation,
    ConversationContent,
    ConversationScrollButton,
} from "@/components/ai-elements/conversation";
import { Loader } from "@/components/ai-elements/loader";
import { Message, MessageContent } from "@/components/ai-elements/message";
import type { PromptInputMessage } from "@/components/ai-elements/prompt-input";
import {
    PromptInput,
    PromptInputBody,
    PromptInputSubmit,
    PromptInputTextarea,
    PromptInputToolbar,
    PromptInputTools,
} from "@/components/ai-elements/prompt-input";
import { Response } from "@/components/ai-elements/response";

const Chatbot = () => {
    const { messages, sendMessage, status } = useChat({
        transport: new DefaultChatTransport({ api: "/api/chatbot" }),
    });

    const [input, setInput] = useState("");

    const submit = (message: PromptInputMessage) => {
        if (!message.text) return;
        sendMessage({ text: message.text });
        setInput("");
    };

    return (
        <>
            <div className="max-w-4xl mx-auto relative flex flex-col h-[calc(100vh-5rem)]">
                <div className="flex-1 overflow-hidden p-6 pb-0">
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
                </div>

                <div className="p-6 pt-4">
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
