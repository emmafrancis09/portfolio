"use client";
import axios from "axios";
import React, { useState } from "react";
import { toast } from "sonner";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      await axios.post("http://localhost:8000/send-dm", formData);
    } catch (err) {
      console.log("Error occured while sending message", err);
      toast.error("Failed to send a message");
    } finally {
      setTimeout(() => {
        setLoading(false);
        if (!loading) {
          toast.success("Message sent successfully");
          setFormData({ name: "", email: "", message: "" });
        }
      }, 1000);
    }
  };

  return (
    <div className="flex items-center justify-center flex-col">
      <h1 className="pb-4 text-4xl">Contact Me</h1>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col items-center py-4 text-neutral-300"
      >
        <input
          name="name"
          onChange={handleChange}
          value={formData.name}
          type="text"
          required
          placeholder="John Doe"
          className="outline-none border my-2 rounded-lg py-2 px-2 w-72 border-neutral-600"
        />
        <input
          name="email"
          onChange={handleChange}
          value={formData.email}
          type="email"
          required
          placeholder="johndoe@gmail.com"
          className="outline-none border my-2 rounded-lg py-2 px-2 w-72 border-neutral-600"
        />
        <textarea
          required
          name="message"
          onChange={handleChange}
          value={formData.message}
          placeholder="Leave a comment"
          className="border rounded-lg py-2 px-2 w-72 my-2 h-32 outline-none border-neutral-600"
        />
        <button
          type="submit"
          className="border-neutral-600 flex items-center justify-center  border my-2 py-2 w-32 rounded-md shadow active:opacity-60 cursor-pointer transition-all"
        >
          {loading ? (
            <div className="w-5 h-5 border-2 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
          ) : (
            "Send"
          )}
        </button>
      </form>
    </div>
  );
};

export default ContactPage;
