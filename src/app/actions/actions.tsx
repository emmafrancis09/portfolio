"use server";

import ConnectDb from "@/db/Mongodb";
import Portfolio from "@/models/PortfolioModels";

export async function saveMessage(formData: FormData) {
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const message = formData.get("message") as string;
  if (!name || !email || !message) {
    throw new Error("All fields are required!");
  }
  try {
    await ConnectDb();
    await Portfolio.create({ name, email, message });
    return { success: true, message: "Message sent successfully" };
  } catch (error) {
    console.error("Database error: ", error);
    return { success: false, message: "Failed to send message" };
  }
}
