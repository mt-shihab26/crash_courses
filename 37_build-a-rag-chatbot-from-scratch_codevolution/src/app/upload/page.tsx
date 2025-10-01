"use client";

import type { ChangeEvent } from "react";

import { useState } from "react";
import { processPDFFile } from "./actions";

import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Loader2 } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

const UploadPage = () => {
    const [loading, setLoading] = useState<boolean>(false);
    const [message, setMessage] = useState<{
        type: "error" | "success";
        text: string;
    } | null>(null);

    const upload = async (e: ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (!file) return;

        setLoading(true);
        setMessage(null);

        try {
            const formData = new FormData();

            formData.append("pdf", file);

            const result = await processPDFFile(formData);

            if (result.success) {
                setMessage({
                    type: "success",
                    text: result.message || "PDF processed successfully",
                });
                e.target.value = "";
            } else {
                setMessage({
                    type: "error",
                    text: result.error || "Failed to process PDF",
                });
            }
        } catch (e: any) {
            setMessage({
                type: "error",
                text: "An error occurred while uploading PDF",
            });
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-gray-50 py-12 px-4">
            <div className="max-w-4xl mx-auto">
                <h1 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                    PDF Upload
                </h1>
                <Card className="mb-6">
                    <CardContent className="pt-6">
                        <div className="space-y-4">
                            <Label>Upload PDF file</Label>
                            <Input
                                id="pdf-upload"
                                type="file"
                                accept=".pdf"
                                onChange={upload}
                                disabled={loading}
                                className="mt-2"
                            />
                        </div>
                        {loading && (
                            <div className="flex items-center gap-2">
                                <Loader2 className="size-5 animate-spin" />
                                <span className="text-muted-foreground">
                                    Processing PDF...
                                </span>
                            </div>
                        )}
                        {message && (
                            <Alert
                                variant={
                                    message.type === "error"
                                        ? "destructive"
                                        : "default"
                                }
                            >
                                <AlertTitle>
                                    {message.type === "error"
                                        ? "Error!"
                                        : "Success!"}
                                </AlertTitle>
                                <AlertDescription>
                                    {message.text}
                                </AlertDescription>
                            </Alert>
                        )}
                    </CardContent>
                </Card>
            </div>
        </div>
    );
};

export default UploadPage;
