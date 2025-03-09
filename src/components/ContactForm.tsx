"use client";

import { saveMessage } from "@/app/actions/actions";
import { toast } from "sonner";
import { useState } from "react";

export default function ContactForm() {
  const [loading, setLoading] = useState(false);

  async function handleSubmit(formData: FormData) {
    setLoading(true);
    const result = await saveMessage(formData);

    if (result.success) {
      toast.success("Message sent successfully!");
    } else {
      toast.error("Failed to send the message");
    }
    setLoading(false);
  }

  return (
    <form
      action={handleSubmit}
      className="flex flex-col items-center py-4 text-neutral-300"
    >
      <input
        name="name"
        type="text"
        required
        placeholder="John Doe"
        className="outline-none border my-2 rounded-lg py-2 px-2 w-72 border-neutral-600"
      />
      <input
        name="email"
        type="email"
        required
        placeholder="johndoe@gmail.com"
        className="outline-none border my-2 rounded-lg py-2 px-2 w-72 border-neutral-600"
      />
      <textarea
        name="message"
        required
        placeholder="Leave a comment"
        className="border rounded-lg py-2 px-2 w-72 my-2 h-32 outline-none border-neutral-600"
      />
      <button
        type="submit"
        className="border-neutral-600 flex items-center justify-center border my-2 py-2 w-32 rounded-md shadow active:opacity-60 cursor-pointer transition-all"
        disabled={loading}
      >
        {loading ? "Sending..." : "Send"}
      </button>
    </form>
  );
}
