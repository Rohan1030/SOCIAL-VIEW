const express = require('express');
const router = express.Router();
const Groq = require('groq-sdk');

const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY
});

const systemPrompt = `
You are a social media content analyst. When given a post, analyze it and return ONLY a valid JSON object (no markdown formatting, no code blocks, just raw JSON) with this exact structure:

{
  "sentiment": {
    "label": "Positive | Negative | Neutral | Sarcastic",
    "score": 50,
    "explanation": "<one sentence>"
  },
  "engagement": {
    "score": 50,
    "hook_strength": "Weak | Moderate | Strong",
    "has_cta": true,
    "tips": ["<tip 1>", "<tip 2>", "<tip 3>"]
  },
  "hashtags": {
    "extracted_topics": ["<topic1>", "<topic2>"],
    "recommended": ["#tag1", "#tag2", "#tag3", "#tag4", "#tag5"],
    "avoid": ["#tag1", "#tag2"]
  },
  "platform_fit": {
    "Twitter": { "score": 50, "suggestion": "<one line rewrite tip>", "improved_post": "<fully generated perfect tweet for this platform>" },
    "LinkedIn": { "score": 50, "suggestion": "<one line rewrite tip>", "improved_post": "<fully generated professional post>" },
    "Instagram": { "score": 50, "suggestion": "<one line rewrite tip>", "improved_post": "<fully generated visually engaging caption with emojis>" }
  }
}
`;

router.post('/', async (req, res) => {
  try {
    const { content, platform } = req.body;

    if (!content) {
      return res.status(400).json({ error: 'Content is required for analysis.' });
    }

    const response = await groq.chat.completions.create({
      messages: [
        { role: 'system', content: systemPrompt },
        { role: 'user', content: `Platform: ${platform || 'General'}\nContent:\n${content}` }
      ],
      model: 'llama-3.3-70b-versatile',
      response_format: { type: 'json_object' }
    });

    const resultString = response.choices[0]?.message?.content || '{}';
    const parsedResult = JSON.parse(resultString);

    res.json(parsedResult);
  } catch (error) {
    console.error("Groq Error:", error);
    res.status(500).json({ error: 'Failed to analyze content. Please ensure your Groq API key is valid.' });
  }
});

module.exports = router;
