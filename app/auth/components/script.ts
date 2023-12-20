import { config } from "dotenv";
config();

console.log(process.env.API_KEY);

// import { OpenAIApi } from "openai";

// const openai = new OpenAIApi({
//   apiKey: process.env.API_KEY,
// });

// // Use the openai instance to call methods
// // For example, to create a chat completion:
// const prompt = "Hello, how are you?";
// const maxTokens = 60;

// openai
//   .createChatCompletion({
//     model: "gpt-3.5-turbo",
//     messages: [
//       {
//         role: "system",
//         content: "You are a helpful assistant.",
//       },
//       {
//         role: "user",
//         content: prompt,
//       },
//     ],
//     max_tokens: maxTokens,
//   })
//   .then((res) => console.log(res.data))
//   .catch((err) => console.error(err));
