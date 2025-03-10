# 💬 Exa Answer Chat App
### Powered by [Exa](https://exa.ai) - The Web Search API

An open-source chat app showcasing the power of Exa's Answer endpoint.

![Screenshot](https://demo.exa.ai/answer/opengraph-image.jpg)

### ✨ Try it yourself:
- [Try the Answer Endpoint](https://dashboard.exa.ai/playground/answer?q=What%20makes%20some%20LLMs%20so%20much%20better%20than%20others%3F&filters=%7B%22model%22%3A%22exa-pro%22%7D) - Experience the Answer endpoint directly on Exa dashboard

- [Live Demo](https://demo.exa.ai/answer) - See the chat app in action

<br>

## 🎯 What is Exa Answer Chat App?

Exa Answer Chat App is a free and open-source application that shows how to use Exa's Answer endpoint. It provides a modern chat interface with real-time streaming responses and citation support.

<br>

## 💻 Tech Stack
- **Backend**: [Exa API](https://exa.ai) - Answer endpoint
- **Frontend**: [Next.js](https://nextjs.org/docs) with App Router
- **Styling**: [TailwindCSS](https://tailwindcss.com)
- **Language**: TypeScript
- **Hosting**: [Vercel](https://vercel.com/)

<br>

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ installed
- Exa API key ([Get it here](https://dashboard.exa.ai/api-keys))

### Installation

1. Clone the repository
```bash
git clone https://github.com/exa-labs/answer-chat-app.git
cd answer-chat-app
```

2. Install dependencies
```bash
npm install
```

3. Set up environment variables
```bash
cp .env.example .env.local
```
Then add your Exa API key to `.env.local`:
```
EXA_API_KEY=your-api-key-here
```

4. Run the development server
```bash
npm run dev
```

5. Open [http://localhost:3000/answer](http://localhost:3000/answer) in your browser

<br>

## ⭐ About [Exa](https://exa.ai)

This project showcases [Exa's](https://exa.ai) Answer endpoint, which provides:

* Real-time streaming responses
* High-quality answers with citations
* Simple API integration (with OpenAI compatible API)

[Try Exa API](https://dashboard.exa.ai) today and build your own AI-powered applications!

<br>

---

Built with ❤️ using [Exa](https://exa.ai)
