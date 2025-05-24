"use server";

import axios from "axios";

export async function fetchGroqResponse(prompt: string): Promise<string> {
  const GROQ_API_KEY = process.env.GROQ_API_KEY;
  const url = "https://api.groq.com/openai/v1/chat/completions";
  try {
    const res = await axios.post(
      url,
    {
      model: "llama-3.3-70b-versatile",
      messages: [
        { 
          role: "user",
          content: prompt,
        },
      ],
    },
    {
        headers: {
          Authorization: `Bearer ${GROQ_API_KEY}`,
        },
    }
    );

    return  res.data.choices[0]?.message?.content;
  } catch (error) {
    console.error(error);
    return `An error occurred while fetching the response from Groq. ${error}`;
  }
} 