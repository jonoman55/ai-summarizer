# OpenAI Article Summarizer

Simplify your reading with Summize, an open-source article summarizer that transforms lengthy articles into clear and concise summaries.

## Installation

Clone the repository, install the dependencies and run the project.

```bash
git clone https://github.com/jonoman55/ai-summarizer.git

cd ai-summarizer
npm install
npm run dev
```

## Rapid API Setup

1. Create a `.env` file in the projects root directory.
2. Open [article-extractor-and-summarizer](https://rapidapi.com/restyler/api/article-extractor-and-summarizer), click on Pricing tab and Subscribe to Basic.
3. Click the [Endpoints](https://rapidapi.com/restyler/api/article-extractor-and-summarizer) tab and copy your `X-RapidAPI-Key`.
4. Open the `.env` file, create a new variable called `VITE_RAPID_API_ARTICLE_KEY` and paste your api key in.
  ```bash
  VITE_RAPID_API_ARTICLE_KEY='your-api-key'
  ```
5. Press CTRL+C in your terminal if the app is running and then restart the app with `npm run dev` to pick up your new `.env` file changes.