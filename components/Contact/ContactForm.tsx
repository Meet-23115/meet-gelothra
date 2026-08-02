"use client";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export function ContactForm() {
  const [nextUrl, setNextUrl] = useState("#contact");
  const email = "imailmeet4000@gmail.com";
  const action = `https://formsubmit.co/${email}`;

  useEffect(() => {
    if (typeof window !== "undefined") {
      const base = window.location.origin + window.location.pathname;
      setNextUrl(base + "#contact");
    }
  }, []);

  return (
    <Card className="w-full max-w-lg">
      <CardHeader>
        <CardTitle>Contact</CardTitle>
        <CardDescription>Send a message — I'll get back to you soon.</CardDescription>
      </CardHeader>
      <form action={action} method="POST" className="space-y-4">
        <CardContent>
          <input type="hidden" name="_captcha" value="false" />
          <input type="hidden" name="_subject" value="New contact form submission" />
          <input type="hidden" name="_next" value={nextUrl} />

          <div className="grid grid-cols-1 gap-4">
            <div className="grid gap-2">
              <Label htmlFor="name">Your name</Label>
              <Input id="name" name="name" required />
            </div>

            <div className="grid gap-2">
              <Label htmlFor="email">Your email</Label>
              <Input id="email" name="email" type="email" required />
            </div>

            <div className="grid gap-2">
              <Label htmlFor="message">Message</Label>
              <textarea
                id="message"
                name="message"
                rows={5}
                required
                className="w-full text-area rounded px-3 py-2 text-black"
              />
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex-col gap-2">
          <Button type="submit" className="w-full">
            Send message
          </Button>
        </CardFooter>
      </form>
    </Card>
  );
}
